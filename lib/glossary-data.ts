export interface MedicalTerm {
  term: string
  pronunciation?: string
  category: string
  definition: string
  simpleExplanation: string
  example?: string
  relatedTerms?: string[]
}

export const medicalTerms: MedicalTerm[] = [
  {
    term: "Acute",
    pronunciation: "uh-KYOOT",
    category: "general",
    definition: "Having a sudden onset, sharp rise, and short course; not chronic.",
    simpleExplanation:
      "Something that happens suddenly and is usually short-term, like an acute illness that comes on quickly.",
    example: "An acute headache starts suddenly and is very painful.",
    relatedTerms: ["Chronic", "Sudden onset"],
  },
  {
    term: "Chronic",
    pronunciation: "KRON-ik",
    category: "general",
    definition: "Persisting for a long time or constantly recurring.",
    simpleExplanation: "A condition that lasts for a long time or keeps coming back, like chronic back pain.",
    example: "Diabetes is a chronic condition that requires ongoing management.",
    relatedTerms: ["Acute", "Long-term", "Persistent"],
  },
  {
    term: "Hypertension",
    pronunciation: "hahy-per-TEN-shuhn",
    category: "cardiovascular",
    definition: "Abnormally high blood pressure, especially arterial blood pressure.",
    simpleExplanation: "High blood pressure - when the force of blood against artery walls is too high.",
    example: "Hypertension is often called the 'silent killer' because it usually has no symptoms.",
    relatedTerms: ["Blood pressure", "Cardiovascular", "Systolic", "Diastolic"],
  },
  {
    term: "Diabetes",
    pronunciation: "dahy-uh-BEE-tis",
    category: "endocrine",
    definition: "A group of metabolic disorders characterized by high blood sugar levels.",
    simpleExplanation: "A condition where your body can't properly control blood sugar levels.",
    example: "People with diabetes need to monitor their blood sugar regularly.",
    relatedTerms: ["Blood sugar", "Insulin", "Glucose", "Metabolism"],
  },
  {
    term: "Inflammation",
    pronunciation: "in-fluh-MEY-shuhn",
    category: "general",
    definition:
      "A localized physical condition in which part of the body becomes reddened, swollen, hot, and often painful.",
    simpleExplanation: "Your body's natural response to injury or infection, causing redness, swelling, and pain.",
    example: "The inflammation around a cut helps your body heal but may cause temporary discomfort.",
    relatedTerms: ["Swelling", "Immune response", "Infection"],
  },
  {
    term: "Antibiotic",
    pronunciation: "an-ti-bahy-OT-ik",
    category: "medication",
    definition: "A medicine that inhibits the growth of or destroys microorganisms, especially bacteria.",
    simpleExplanation: "Medicine that fights bacterial infections by killing bacteria or stopping them from growing.",
    example: "Your doctor may prescribe an antibiotic if you have strep throat.",
    relatedTerms: ["Bacteria", "Infection", "Medication", "Prescription"],
  },
  {
    term: "Symptom",
    pronunciation: "SIMP-tuhm",
    category: "general",
    definition: "A physical or mental feature that indicates a condition of disease.",
    simpleExplanation: "A sign that something might be wrong with your health, like fever or pain.",
    example: "A persistent cough can be a symptom of various respiratory conditions.",
    relatedTerms: ["Sign", "Diagnosis", "Condition"],
  },
  {
    term: "Diagnosis",
    pronunciation: "dahy-uhg-NOH-sis",
    category: "general",
    definition: "The identification of the nature of an illness or other problem by examination of the symptoms.",
    simpleExplanation: "When a doctor figures out what medical condition you have based on your symptoms and tests.",
    example: "After running several tests, the doctor made a diagnosis of pneumonia.",
    relatedTerms: ["Symptom", "Examination", "Medical test"],
  },
  {
    term: "Prognosis",
    pronunciation: "prog-NOH-sis",
    category: "general",
    definition: "A forecast of the likely course of a disease or ailment.",
    simpleExplanation: "A doctor's prediction about how a disease will progress and what the outcome might be.",
    example: "The prognosis for early-stage cancer is often very good with proper treatment.",
    relatedTerms: ["Diagnosis", "Treatment", "Recovery"],
  },
  {
    term: "Benign",
    pronunciation: "bih-NAHYN",
    category: "oncology",
    definition: "Not harmful in effect; not cancerous.",
    simpleExplanation: "Not dangerous or cancerous - usually referring to tumors that won't spread.",
    example: "The biopsy showed the tumor was benign, which was great news.",
    relatedTerms: ["Malignant", "Tumor", "Cancer"],
  },
  {
    term: "Malignant",
    pronunciation: "muh-LIG-nuhnt",
    category: "oncology",
    definition: "Very virulent or infectious; cancerous and invasive.",
    simpleExplanation: "Cancerous and dangerous - referring to tumors that can spread to other parts of the body.",
    example: "Malignant tumors require immediate and aggressive treatment.",
    relatedTerms: ["Benign", "Cancer", "Metastasis"],
  },
  {
    term: "Biopsy",
    pronunciation: "BAHY-op-see",
    category: "procedure",
    definition:
      "An examination of tissue removed from a living body to discover the presence, cause, or extent of a disease.",
    simpleExplanation: "Taking a small sample of tissue from your body to examine it under a microscope.",
    example: "The doctor performed a biopsy to determine if the lump was cancerous.",
    relatedTerms: ["Tissue", "Diagnosis", "Cancer screening"],
  },
  {
    term: "Anesthesia",
    pronunciation: "an-uhs-THEE-zhuh",
    category: "procedure",
    definition:
      "Insensitivity to pain, especially as artificially induced by the administration of gases or the injection of drugs before surgical operations.",
    simpleExplanation: "Medicine that prevents you from feeling pain during surgery or medical procedures.",
    example: "The patient was given general anesthesia before the operation.",
    relatedTerms: ["Surgery", "Pain management", "Sedation"],
  },
  {
    term: "Metabolism",
    pronunciation: "muh-TAB-uh-liz-uhm",
    category: "physiology",
    definition: "The chemical processes that occur within a living organism in order to maintain life.",
    simpleExplanation: "All the chemical processes in your body that convert food into energy and keep you alive.",
    example: "A fast metabolism means your body burns calories quickly.",
    relatedTerms: ["Energy", "Calories", "Digestion"],
  },
  {
    term: "Immune System",
    pronunciation: "ih-MYOON SIS-tuhm",
    category: "physiology",
    definition:
      "A complex network of cells, tissues, and organs that work together to defend the body against attacks by foreign invaders.",
    simpleExplanation:
      "Your body's defense system that fights off germs, viruses, and other things that could make you sick.",
    example: "A strong immune system helps prevent you from getting sick often.",
    relatedTerms: ["Antibodies", "White blood cells", "Infection"],
  },
]
