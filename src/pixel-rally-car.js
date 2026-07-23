const PARTICLE_LIMIT = 48;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const randomBetween = (min, max) => min + Math.random() * (max - min);
const easeOutCubic = (value) => 1 - ((1 - value) ** 3);
const easeInCubic = (value) => value ** 3;

function createCarSprite() {
  const sprite = document.createElement("canvas");
  sprite.width = 56;
  sprite.height = 16;

  const context = sprite.getContext("2d");
  context.imageSmoothingEnabled = false;

  const paint = (color, x, y, width, height) => {
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
  };

  // Tires and their deep black outlines.
  paint("#050505", 9, 10, 11, 5);
  paint("#050505", 11, 9, 7, 7);
  paint("#050505", 38, 10, 11, 5);
  paint("#050505", 40, 9, 7, 7);
  paint("#262626", 11, 11, 7, 4);
  paint("#262626", 40, 11, 7, 4);

  // Dark outline gives the small silhouette a clean retro-game read.
  paint("#141719", 4, 7, 49, 6);
  paint("#141719", 8, 5, 41, 3);
  paint("#141719", 14, 3, 29, 3);
  paint("#141719", 18, 2, 21, 2);

  // Silver-grey body.
  paint("#879197", 5, 7, 47, 5);
  paint("#aeb8bc", 9, 6, 40, 2);
  paint("#9da7ab", 15, 4, 27, 2);
  paint("#d1d8da", 8, 7, 35, 1);
  paint("#646e73", 7, 11, 43, 2);
  paint("#cad1d3", 13, 12, 24, 1);

  // Orange roof, hood and rally stripe from the reference car.
  paint("#f36b2f", 18, 2, 21, 2);
  paint("#ff7c36", 17, 4, 4, 1);
  paint("#f36b2f", 41, 7, 11, 4);
  paint("#ff8b45", 43, 7, 8, 1);
  paint("#e95a22", 22, 10, 18, 2);

  // Dark windows and panel details.
  paint("#111b20", 17, 5, 10, 3);
  paint("#0b1419", 29, 5, 11, 3);
  paint("#30424a", 18, 5, 8, 1);
  paint("#30424a", 30, 5, 9, 1);
  paint("#d3d9da", 27, 4, 2, 5);
  paint("#3c464a", 28, 8, 1, 4);
  paint("#3c464a", 39, 8, 1, 4);
  paint("#ece8d4", 51, 8, 3, 2);
  paint("#a4150e", 5, 8, 2, 2);
  paint("#15191a", 49, 11, 5, 1);
  paint("#f3f1e9", 47, 12, 5, 1);
  paint("#315f82", 20, 9, 2, 2);
  paint("#f2f2ed", 23, 9, 3, 2);

  return sprite;
}

const carSprite = createCarSprite();

class PixelRallyCar {
  constructor(root) {
    this.root = root;
    this.canvas = root.querySelector("canvas");
    this.context = this.canvas?.getContext("2d");
    this.motionPreference = window.matchMedia(REDUCED_MOTION_QUERY);
    this.particles = [];
    this.width = 0;
    this.height = 0;
    this.pixelScale = 1;
    this.trackOffset = 0;
    this.wheelPhase = 0;
    this.dustAccumulator = 0;
    this.jumpStartedAt = null;
    this.landingBurstCreated = false;
    this.hovered = false;
    this.visible = true;
    this.running = false;
    this.animationFrame = 0;
    this.lastFrameAt = 0;

    if (!this.context) return;

    this.context.imageSmoothingEnabled = false;
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(this.root);

    this.intersectionObserver = new IntersectionObserver(([entry]) => {
      this.visible = entry.isIntersecting;
      this.syncAnimationState();
    }, { rootMargin: "120px" });
    this.intersectionObserver.observe(this.root);

    this.handleMotionPreference = () => {
      this.root.setAttribute("aria-disabled", String(this.motionPreference.matches));
      this.root.setAttribute(
        "aria-label",
        this.motionPreference.matches
          ? this.root.dataset.staticLabel
          : this.root.dataset.motionLabel,
      );

      if (this.motionPreference.matches) {
        this.particles.length = 0;
        this.jumpStartedAt = null;
        this.root.removeAttribute("data-jumping");
      }

      this.syncAnimationState();
      this.draw(performance.now(), 0);
    };

    this.handleVisibilityChange = () => this.syncAnimationState();
    this.handleLanguageChange = () => this.handleMotionPreference();
    this.handlePointerEnter = (event) => {
      if (event.pointerType !== "touch") this.hovered = true;
    };
    this.handlePointerLeave = () => {
      this.hovered = false;
    };
    this.handleClick = () => this.jump();

    this.root.addEventListener("pointerenter", this.handlePointerEnter);
    this.root.addEventListener("pointerleave", this.handlePointerLeave);
    this.root.addEventListener("click", this.handleClick);
    document.addEventListener("visibilitychange", this.handleVisibilityChange);
    document.addEventListener("languagechange", this.handleLanguageChange);
    this.motionPreference.addEventListener("change", this.handleMotionPreference);

    this.resize();
    this.handleMotionPreference();
  }

  resize() {
    if (!this.context) return;

    const bounds = this.root.getBoundingClientRect();
    const nextWidth = Math.max(1, Math.round(bounds.width));
    const nextHeight = Math.max(1, Math.round(bounds.height));
    const deviceScale = Math.min(window.devicePixelRatio || 1, 2);

    if (
      nextWidth === this.width
      && nextHeight === this.height
      && this.canvas.width === Math.round(nextWidth * deviceScale)
    ) return;

    this.width = nextWidth;
    this.height = nextHeight;
    this.pixelScale = nextWidth >= 168 && nextHeight >= 40 ? 2 : 1;
    this.canvas.width = Math.round(nextWidth * deviceScale);
    this.canvas.height = Math.round(nextHeight * deviceScale);
    this.context.setTransform(deviceScale, 0, 0, deviceScale, 0, 0);
    this.context.imageSmoothingEnabled = false;
    this.draw(performance.now(), 0);
  }

  syncAnimationState() {
    const shouldRun = !this.motionPreference.matches
      && this.visible
      && document.visibilityState !== "hidden";

    if (shouldRun && !this.running) {
      this.running = true;
      this.lastFrameAt = performance.now();
      this.animationFrame = requestAnimationFrame((time) => this.tick(time));
    } else if (!shouldRun && this.running) {
      this.running = false;
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = 0;
    }
  }

  tick(time) {
    if (!this.running) return;

    const elapsed = clamp(time - this.lastFrameAt, 0, 40);
    this.lastFrameAt = time;
    this.draw(time, elapsed);
    this.animationFrame = requestAnimationFrame((nextTime) => this.tick(nextTime));
  }

  getGeometry(time) {
    const carWidth = carSprite.width * this.pixelScale;
    const carHeight = carSprite.height * this.pixelScale;
    const trackY = this.height - 4;
    const driveSpeed = this.hovered ? 1.75 : 1;
    const drift = Math.round(Math.sin(time * 0.0018 * driveSpeed) * this.pixelScale);
    const bob = this.motionPreference.matches
      ? 0
      : Math.round(Math.sin(time * 0.0085 * driveSpeed) * Math.min(this.pixelScale, 1.5));
    const jumpOffset = this.getJumpOffset(time);
    const x = Math.round((this.width - carWidth) * 0.56) + drift;
    const y = Math.round(trackY - carHeight + bob - jumpOffset);

    return {
      carHeight,
      carWidth,
      driveSpeed,
      rearWheelX: x + (14 * this.pixelScale),
      trackY,
      x,
      y,
    };
  }

  getJumpOffset(time) {
    if (this.jumpStartedAt === null) return 0;

    const duration = 840;
    const progress = clamp((time - this.jumpStartedAt) / duration, 0, 1);
    const height = Math.min(8, Math.max(5, this.height * 0.18));
    let offset = 0;

    if (progress < 0.29) {
      offset = easeOutCubic(progress / 0.29) * height;
    } else if (progress < 0.42) {
      const hang = (progress - 0.29) / 0.13;
      offset = height - (Math.sin(hang * Math.PI) * 0.35);
    } else if (progress < 0.72) {
      const fall = (progress - 0.42) / 0.3;
      offset = (1 - easeInCubic(fall)) * height;
    } else {
      if (!this.landingBurstCreated) {
        this.landingBurstCreated = true;
        const geometry = this.getRestingGeometry();
        this.spawnDust(18, geometry, true);
      }

      const settle = (progress - 0.72) / 0.28;
      offset = Math.max(0, Math.sin(settle * Math.PI * 3) * (1 - settle) * 2.2);
    }

    if (progress >= 1) {
      this.jumpStartedAt = null;
      this.landingBurstCreated = false;
      this.root.removeAttribute("data-jumping");
      return 0;
    }

    return Math.round(offset);
  }

  getRestingGeometry() {
    const carWidth = carSprite.width * this.pixelScale;
    const carHeight = carSprite.height * this.pixelScale;
    const trackY = this.height - 4;
    const x = Math.round((this.width - carWidth) * 0.56);

    return {
      carHeight,
      carWidth,
      driveSpeed: this.hovered ? 1.75 : 1,
      rearWheelX: x + (14 * this.pixelScale),
      trackY,
      x,
      y: trackY - carHeight,
    };
  }

  jump() {
    if (this.motionPreference.matches || this.jumpStartedAt !== null) return;

    this.jumpStartedAt = performance.now();
    this.landingBurstCreated = false;
    this.root.setAttribute("data-jumping", "true");
    this.spawnDust(5, this.getRestingGeometry(), true);
  }

  spawnDust(count, geometry, intense = false) {
    const availableSlots = PARTICLE_LIMIT - this.particles.length;
    const particleCount = Math.min(count, availableSlots);

    for (let index = 0; index < particleCount; index += 1) {
      const strength = intense ? randomBetween(1.25, 1.8) : randomBetween(0.72, 1.12);
      this.particles.push({
        x: geometry.rearWheelX - randomBetween(0, 4 * this.pixelScale),
        y: geometry.trackY - randomBetween(1, 3 * this.pixelScale),
        velocityX: -randomBetween(13, 30) * strength,
        velocityY: -randomBetween(4, 16) * strength,
        age: 0,
        lifetime: randomBetween(360, intense ? 760 : 610),
        size: randomBetween(1.1, intense ? 2.4 : 1.9) * Math.max(1, this.pixelScale * 0.75),
        growth: randomBetween(1.4, 3.5),
        shade: Math.random() > 0.45 ? "194, 153, 93" : "137, 105, 66",
      });
    }
  }

  updateParticles(elapsed) {
    const seconds = elapsed / 1000;

    this.particles = this.particles.filter((particle) => {
      particle.age += elapsed;
      particle.x += particle.velocityX * seconds;
      particle.y += particle.velocityY * seconds;
      particle.velocityX *= 0.985 ** (elapsed / 16.67);
      particle.velocityY += 9 * seconds;
      return particle.age < particle.lifetime && particle.x > -12;
    });
  }

  drawTrack() {
    const context = this.context;
    const trackY = this.height - 4;

    context.fillStyle = "rgba(151, 111, 63, .72)";
    context.fillRect(0, trackY, this.width, 3);
    context.fillStyle = "rgba(80, 59, 36, .85)";
    context.fillRect(0, trackY + 2, this.width, 1);

    const patternOffset = Math.floor(this.trackOffset) % 13;
    for (let x = -patternOffset; x < this.width + 8; x += 13) {
      context.fillStyle = ((x + patternOffset) / 13) % 2 === 0
        ? "rgba(232, 191, 119, .8)"
        : "rgba(110, 78, 44, .85)";
      context.fillRect(Math.round(x), trackY, 5, 1);
    }
  }

  drawParticles() {
    this.particles.forEach((particle) => {
      const progress = particle.age / particle.lifetime;
      const opacity = Math.max(0, (1 - progress) * 0.78);
      const size = Math.max(1, Math.round(particle.size + (particle.growth * progress)));

      this.context.fillStyle = `rgba(${particle.shade}, ${opacity})`;
      this.context.fillRect(
        Math.round(particle.x),
        Math.round(particle.y),
        size,
        size,
      );
    });
  }

  drawWheels(geometry) {
    const context = this.context;
    const scale = this.pixelScale;
    const phase = Math.floor(this.wheelPhase) % 4;
    const wheelCenters = [
      [geometry.x + (14 * scale), geometry.y + (13 * scale)],
      [geometry.x + (43 * scale), geometry.y + (13 * scale)],
    ];

    wheelCenters.forEach(([centerX, centerY]) => {
      context.fillStyle = "#747d80";
      context.fillRect(centerX - scale, centerY - scale, scale * 3, scale * 3);
      context.fillStyle = "#d4d8d6";

      if (phase % 2 === 0) {
        context.fillRect(centerX - (2 * scale), centerY, scale * 5, scale);
      } else {
        context.fillRect(centerX, centerY - (2 * scale), scale, scale * 5);
      }

      context.fillStyle = "#222729";
      context.fillRect(centerX, centerY, scale, scale);
    });
  }

  draw(time, elapsed) {
    if (!this.context || this.width <= 1 || this.height <= 1) return;

    const context = this.context;
    const geometry = this.getGeometry(time);
    context.clearRect(0, 0, this.width, this.height);
    context.imageSmoothingEnabled = false;

    if (!this.motionPreference.matches && elapsed > 0) {
      const speed = geometry.driveSpeed;
      this.trackOffset += elapsed * 0.045 * speed;
      this.wheelPhase += elapsed * 0.012 * speed;
      this.dustAccumulator += (elapsed / 1000) * (this.hovered ? 20 : 9);

      while (this.dustAccumulator >= 1) {
        this.spawnDust(1, geometry);
        this.dustAccumulator -= 1;
      }

      this.updateParticles(elapsed);
    }

    this.drawTrack();

    context.fillStyle = "rgba(0, 0, 0, .32)";
    context.fillRect(
      geometry.x + (8 * this.pixelScale),
      geometry.trackY - 1,
      geometry.carWidth - (12 * this.pixelScale),
      2,
    );

    this.drawParticles();
    context.drawImage(
      carSprite,
      geometry.x,
      geometry.y,
      geometry.carWidth,
      geometry.carHeight,
    );
    this.drawWheels(geometry);
  }
}

export function mountPixelRallyCars(selector = "[data-pixel-rally]") {
  return [...document.querySelectorAll(selector)].map((root) => new PixelRallyCar(root));
}
