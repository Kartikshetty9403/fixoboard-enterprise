import { NewsItem } from "../types/product";

export const initialNewsItems: NewsItem[] = [
  {
    id: "n1",
    slug: "fixoboard-limca-book-records",
    title: {
      en: "Fixoboard Officially Entered in Limca Book of Indian Records",
      hi: "फिक्सोबोर्ड आधिकारिक तौर पर लिम्का बुक ऑफ इंडियन रिकॉर्ड्स में दर्ज",
    },
    summary: {
      en: "A milestone achievement for Atlantic Polymers as our flagship brand Fixoboard sets a national benchmark for polymer innovation.",
      hi: "अटलांटिक पॉलिमर्स के लिए एक मील का पत्थर उपलब्धि क्योंकि हमारा प्रमुख ब्रांड फिक्सोबोर्ड पॉलिमर नवाचार के लिए एक राष्ट्रीय बेंचमार्क स्थापित करता है।",
    },
    content: {
      en: "We are proud to announce that Fixoboard has been recognized by the Limca Book of Indian Records for its pioneering role in PVC and WPC manufacturing. This recognition validates our three decades of commitment to quality and industrial excellence. The award highlights our state-of-the-art facility in Silvassa and our contribution to sustainable building materials.",
      hi: "हमें यह घोषणा करते हुए गर्व हो रहा है कि फिक्सोबोर्ड को पीवीसी और डब्ल्यूपीसी निर्माण में अपनी अग्रणी भूमिका के लिए लिम्का बुक ऑफ इंडियन रिकॉर्ड्स द्वारा मान्यता दी गई है। यह मान्यता गुणवत्ता और औद्योगिक उत्कृष्टता के प्रति हमारी तीन दशकों की प्रतिबद्धता की पुष्टि करती है। यह पुरस्कार सिलवासा में हमारी अत्याधुनिक सुविधा और टिकाऊ निर्माण सामग्री में हमारे योगदान को उजागर करता है।",
    },
    category: "Company",
    tags: ["Award", "Legacy", "Innovation"],
    featuredImage:
      "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80",
    publishDate: "2024-03-15T10:00:00Z",
    isPublished: true,
    seo: {
      metaTitle: "Fixoboard Limca Book of Records Achievement",
      metaDescription:
        "Fixoboard by Atlantic Polymers Pvt. Ltd. achieves recognition in Limca Book of Indian Records for polymer innovation.",
    },
  },
  {
    id: "n2",
    slug: "new-pvc-marble-sheets-launch",
    title: {
      en: "Launch of Next-Gen High Gloss PVC Marble Sheets",
    },
    summary: {
      en: "Introducing our latest range of decorative wall cladding solutions with superior UV-coating and natural stone textures.",
    },
    content: {
      en: "Fixoboard expands its decorative portfolio with the launch of high-gloss PVC Marble Sheets. Designed for premium interiors, these sheets offer the aesthetic of natural marble with the durability of polymer composites. They are 100% waterproof, anti-bacterial, and ideal for residential as well as clinical environments.",
    },
    category: "Product",
    tags: ["Launch", "Interior", "Decorative"],
    featuredImage:
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800",
    publishDate: "2024-02-28T14:30:00Z",
    isPublished: true,
    seo: {
      metaTitle: "New PVC Marble Sheets Launch | Fixoboard",
      metaDescription:
        "Discover the new range of high-gloss PVC Marble Sheets from Fixoboard. Premium aesthetics with waterproof durability.",
    },
  },
];
