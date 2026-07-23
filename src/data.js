export const company = {
  name: "GARAGE F1",
  phone: "+995555883040",
  phoneDisplay: "+995 555 88 30 40",
  whatsapp: "https://wa.me/995555883040",
  address: "Batumi, Machahela street 12",
  maps: "https://www.google.com/maps/search/?api=1&query=Batumi%2C%20Machahela%20street%2012",
};

export const assetPath = (path) =>
  `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, "")}`;

export const navigation = [
  { key: "home", href: "#home" },
  { key: "services", href: "#services" },
  { key: "prices", href: "#prices" },
  { key: "about", href: "#about" },
  { key: "history", href: "#gallery" },
  { key: "contacts", href: "#contacts" },
];

export const services = [
  {
    id: "engine",
    number: "01",
    image: assetPath("images/generated/service-engine-repair.webp"),
    mobileImage: assetPath("images/generated/service-engine-repair-mobile.webp"),
    imageWidth: 1086,
    imageHeight: 1448,
    itemCount: 3,
  },
  {
    id: "chassis",
    number: "02",
    image: assetPath("images/generated/service-suspension-repair.webp"),
    mobileImage: assetPath("images/generated/service-suspension-repair-mobile.webp"),
    imageWidth: 1086,
    imageHeight: 1448,
    itemCount: 2,
  },
  {
    id: "transmission",
    number: "03",
    image: assetPath("images/generated/service-transmission-repair.webp"),
    mobileImage: assetPath("images/generated/service-transmission-repair-mobile.webp"),
    imageWidth: 1086,
    imageHeight: 1448,
    itemCount: 3,
  },
  {
    id: "electrics",
    number: "04",
    image: assetPath("images/generated/service-auto-electrics.webp"),
    mobileImage: assetPath("images/generated/service-auto-electrics-mobile.webp"),
    imageWidth: 1448,
    imageHeight: 1086,
    itemCount: 1,
  },
  {
    id: "diagnostics",
    number: "05",
    image: assetPath("images/generated/service-computer-diagnostics.webp"),
    mobileImage: assetPath("images/generated/service-computer-diagnostics-mobile.webp"),
    imageWidth: 1448,
    imageHeight: 1086,
    itemCount: 1,
  },
];

export const socialLinks = [
  { label: "Instagram", handle: "@autoservice_batumi", href: "https://www.instagram.com/autoservice_batumi?utm_source=qr" },
  { label: "TikTok", handle: "@autorepair.batumi", href: "https://www.tiktok.com/@autorepair.batumi?_r=1" },
  { label: "Facebook", handle: "GARAGE F1", href: "https://www.facebook.com/share/1R71TA8W4Z/?mibextid=wwXIfr" },
];

export const gallery = [
  { src: assetPath("images/garage/212d32f9-6376-436e-a526-ea35abd3e726.png") },
  { src: assetPath("images/garage/2d11b99d-bec6-45d8-9ef9-2c595d8ecb4c.png") },
  { src: assetPath("images/garage/51b1b681-a398-4e3e-9aba-8de5da103c2e.png") },
  { src: assetPath("images/garage/73768035-112e-4a76-9ef4-433a11b16ca7.png") },
  { src: assetPath("images/garage/c2c9d697-c916-4e12-adba-2af9a519fd1b.png") },
  { src: assetPath("images/garage/709346cc-0570-4c87-b90c-379ba9d5d960.png") },
  { src: assetPath("images/garage/4f858397-8746-4ebb-92c0-32bc8ea40b00.png") },
  { src: assetPath("images/garage/11e4aaa2-94a7-4339-a988-ac37af50aaa7.png") },
  { src: assetPath("images/garage/66a5b9cc-8fa0-45fa-8d07-92eff90cdaaa.png") },
  { src: assetPath("images/garage/e1e795da-f564-4aaa-a906-5da1637a26bf.png") },
  { src: assetPath("images/garage/850d324f-fcbe-4e0c-ac8e-713eae90e1b5.png") },
  { src: assetPath("images/garage/9956e1f9-07d6-4f73-a90b-0ac97c757605.png") },
  { src: assetPath("images/garage/0f152f84-e43b-4790-8259-6398561befdb.png") },
  { src: assetPath("images/garage/8d64d059-af64-4781-8e63-874fcab9483b.png") },
  { src: assetPath("images/garage/ec781c0f-9eff-44f3-828d-d4fc28d64f8b.png") },
  { src: assetPath("images/garage/eb11d4c9-f7b5-4705-b6c6-75c6f5933797.png") },
];
