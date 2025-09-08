export interface Symptom {
  id: string
  name: string
  category: string
  severity: "mild" | "moderate" | "severe"
}

export interface ConditionMatch {
  id: string
  name: string
  description: string
  severity: "mild" | "moderate" | "serious" | "critical"
  matchPercentage: number
  matchingSymptoms: string[]
  recommendations: string[]
}

export const symptoms: Symptom[] = [
  // General Symptoms
  { id: "fever", name: "Fever", category: "general", severity: "moderate" },
  { id: "fatigue", name: "Fatigue", category: "general", severity: "mild" },
  { id: "chills", name: "Chills", category: "general", severity: "mild" },
  { id: "sweating", name: "Excessive Sweating", category: "general", severity: "mild" },
  { id: "weight-loss", name: "Unexplained Weight Loss", category: "general", severity: "moderate" },
  { id: "weight-gain", name: "Unexplained Weight Gain", category: "general", severity: "moderate" },
  { id: "loss-appetite", name: "Loss of Appetite", category: "general", severity: "mild" },
  { id: "weakness", name: "General Weakness", category: "general", severity: "mild" },

  // Respiratory Symptoms
  { id: "cough", name: "Cough", category: "respiratory", severity: "mild" },
  { id: "shortness-breath", name: "Shortness of Breath", category: "respiratory", severity: "moderate" },
  { id: "wheezing", name: "Wheezing", category: "respiratory", severity: "moderate" },
  { id: "chest-pain", name: "Chest Pain", category: "respiratory", severity: "severe" },
  { id: "sore-throat", name: "Sore Throat", category: "respiratory", severity: "mild" },
  { id: "runny-nose", name: "Runny Nose", category: "respiratory", severity: "mild" },
  { id: "congestion", name: "Nasal Congestion", category: "respiratory", severity: "mild" },
  { id: "coughing-blood", name: "Coughing Blood", category: "respiratory", severity: "severe" },

  // Digestive Symptoms
  { id: "nausea", name: "Nausea", category: "digestive", severity: "mild" },
  { id: "vomiting", name: "Vomiting", category: "digestive", severity: "moderate" },
  { id: "diarrhea", name: "Diarrhea", category: "digestive", severity: "mild" },
  { id: "constipation", name: "Constipation", category: "digestive", severity: "mild" },
  { id: "abdominal-pain", name: "Abdominal Pain", category: "digestive", severity: "moderate" },
  { id: "heartburn", name: "Heartburn", category: "digestive", severity: "mild" },
  { id: "bloating", name: "Bloating", category: "digestive", severity: "mild" },
  { id: "blood-stool", name: "Blood in Stool", category: "digestive", severity: "severe" },

  // Neurological Symptoms
  { id: "headache", name: "Headache", category: "neurological", severity: "mild" },
  { id: "dizziness", name: "Dizziness", category: "neurological", severity: "mild" },
  { id: "confusion", name: "Confusion", category: "neurological", severity: "moderate" },
  { id: "memory-loss", name: "Memory Loss", category: "neurological", severity: "moderate" },
  { id: "seizures", name: "Seizures", category: "neurological", severity: "severe" },
  { id: "numbness", name: "Numbness or Tingling", category: "neurological", severity: "moderate" },
  { id: "vision-changes", name: "Vision Changes", category: "neurological", severity: "moderate" },
  { id: "loss-consciousness", name: "Loss of Consciousness", category: "neurological", severity: "severe" },

  // Cardiovascular Symptoms
  { id: "palpitations", name: "Heart Palpitations", category: "cardiovascular", severity: "moderate" },
  { id: "irregular-heartbeat", name: "Irregular Heartbeat", category: "cardiovascular", severity: "moderate" },
  { id: "swelling-legs", name: "Swelling in Legs/Feet", category: "cardiovascular", severity: "moderate" },
  { id: "high-blood-pressure", name: "High Blood Pressure", category: "cardiovascular", severity: "moderate" },
  { id: "low-blood-pressure", name: "Low Blood Pressure", category: "cardiovascular", severity: "moderate" },

  // Musculoskeletal Symptoms
  { id: "joint-pain", name: "Joint Pain", category: "musculoskeletal", severity: "mild" },
  { id: "muscle-pain", name: "Muscle Pain", category: "musculoskeletal", severity: "mild" },
  { id: "back-pain", name: "Back Pain", category: "musculoskeletal", severity: "mild" },
  { id: "stiffness", name: "Joint Stiffness", category: "musculoskeletal", severity: "mild" },
  { id: "swelling-joints", name: "Swelling in Joints", category: "musculoskeletal", severity: "moderate" },
  { id: "limited-mobility", name: "Limited Mobility", category: "musculoskeletal", severity: "moderate" },
]

// Symptom matching logic
export function getConditionsBySymptoms(selectedSymptomIds: string[]): ConditionMatch[] {
  const conditionMatches: ConditionMatch[] = []

  // Define condition patterns with their associated symptoms
  const conditionPatterns = [
    {
      id: "covid-19",
      name: "COVID-19",
      description: "Respiratory illness caused by SARS-CoV-2 virus",
      severity: "moderate" as const,
      symptoms: [
        "fever",
        "cough",
        "fatigue",
        "shortness-breath",
        "sore-throat",
        "loss-appetite",
        "headache",
        "muscle-pain",
      ],
      recommendations: [
        "Get tested for COVID-19",
        "Isolate from others",
        "Rest and stay hydrated",
        "Monitor symptoms closely",
        "Consult healthcare provider if symptoms worsen",
      ],
    },
    {
      id: "diabetes-type-2",
      name: "Type 2 Diabetes",
      description: "Chronic condition affecting blood sugar regulation",
      severity: "serious" as const,
      symptoms: ["fatigue", "weight-loss", "loss-appetite", "vision-changes", "numbness"],
      recommendations: [
        "Get blood sugar tested",
        "Consult an endocrinologist",
        "Monitor diet and exercise",
        "Check for complications",
        "Consider lifestyle modifications",
      ],
    },
    {
      id: "hypertension",
      name: "High Blood Pressure",
      description: "Elevated blood pressure in arteries",
      severity: "serious" as const,
      symptoms: ["headache", "dizziness", "palpitations", "high-blood-pressure", "vision-changes"],
      recommendations: [
        "Monitor blood pressure regularly",
        "Reduce sodium intake",
        "Exercise regularly",
        "Manage stress",
        "Consult cardiologist if persistent",
      ],
    },
    {
      id: "migraine",
      name: "Migraine Headache",
      description: "Severe headache with neurological symptoms",
      severity: "moderate" as const,
      symptoms: ["headache", "nausea", "vomiting", "vision-changes", "dizziness"],
      recommendations: [
        "Rest in dark, quiet room",
        "Apply cold compress",
        "Stay hydrated",
        "Identify triggers",
        "Consider preventive medication",
      ],
    },
    {
      id: "asthma",
      name: "Asthma",
      description: "Respiratory condition with airway inflammation",
      severity: "moderate" as const,
      symptoms: ["shortness-breath", "wheezing", "cough", "chest-pain", "fatigue"],
      recommendations: [
        "Use rescue inhaler if available",
        "Avoid known triggers",
        "See pulmonologist",
        "Consider allergy testing",
        "Develop asthma action plan",
      ],
    },
    {
      id: "depression",
      name: "Depression",
      description: "Mental health condition affecting mood and daily functioning",
      severity: "serious" as const,
      symptoms: ["fatigue", "loss-appetite", "weakness", "memory-loss", "confusion"],
      recommendations: [
        "Consult mental health professional",
        "Consider therapy options",
        "Maintain social connections",
        "Exercise regularly",
        "Seek immediate help if having suicidal thoughts",
      ],
    },
    {
      id: "gastroenteritis",
      name: "Gastroenteritis (Stomach Flu)",
      description: "Inflammation of stomach and intestines",
      severity: "mild" as const,
      symptoms: ["nausea", "vomiting", "diarrhea", "abdominal-pain", "fever", "fatigue"],
      recommendations: [
        "Stay hydrated with clear fluids",
        "Rest and avoid solid foods initially",
        "Gradually reintroduce bland foods",
        "Wash hands frequently",
        "Seek care if severe dehydration occurs",
      ],
    },
    {
      id: "arthritis",
      name: "Arthritis",
      description: "Joint inflammation causing pain and stiffness",
      severity: "moderate" as const,
      symptoms: ["joint-pain", "stiffness", "swelling-joints", "limited-mobility", "fatigue"],
      recommendations: [
        "Apply heat or cold therapy",
        "Gentle exercise and stretching",
        "Maintain healthy weight",
        "Consider anti-inflammatory medication",
        "Consult rheumatologist for persistent symptoms",
      ],
    },
  ]

  // Calculate matches for each condition
  conditionPatterns.forEach((condition) => {
    const matchingSymptoms = condition.symptoms.filter((symptom) => selectedSymptomIds.includes(symptom))

    if (matchingSymptoms.length > 0) {
      const matchPercentage = Math.round((matchingSymptoms.length / condition.symptoms.length) * 100)

      // Only include conditions with at least 25% match
      if (matchPercentage >= 25) {
        const matchingSymptomNames = matchingSymptoms.map((symptomId) => {
          const symptom = symptoms.find((s) => s.id === symptomId)
          return symptom ? symptom.name : symptomId
        })

        conditionMatches.push({
          id: condition.id,
          name: condition.name,
          description: condition.description,
          severity: condition.severity,
          matchPercentage,
          matchingSymptoms: matchingSymptomNames,
          recommendations: condition.recommendations,
        })
      }
    }
  })

  // Sort by match percentage (highest first)
  return conditionMatches.sort((a, b) => b.matchPercentage - a.matchPercentage)
}
