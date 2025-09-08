export interface PreventionTip {
  title: string
  description: string
  frequency?: string
}

export interface PreventionSection {
  title: string
  tips: PreventionTip[]
}

export interface PreventionCategory {
  title: string
  description: string
  sections: PreventionSection[]
}

export const preventionData: { [key: string]: PreventionCategory } = {
  lifestyle: {
    title: "Healthy Lifestyle",
    description: "Essential lifestyle choices that form the foundation of good health and disease prevention.",
    sections: [
      {
        title: "Daily Habits",
        tips: [
          {
            title: "Stay Hydrated",
            description: "Drink 8-10 glasses of water daily to maintain proper body function and flush out toxins.",
            frequency: "Daily",
          },
          {
            title: "Avoid Smoking",
            description: "Eliminate tobacco use to reduce risk of cancer, heart disease, and respiratory problems.",
            frequency: "Always",
          },
          {
            title: "Limit Alcohol",
            description: "Consume alcohol in moderation - no more than 1 drink per day for women, 2 for men.",
            frequency: "Moderate use",
          },
          {
            title: "Practice Good Posture",
            description: "Maintain proper posture while sitting and standing to prevent back and neck problems.",
            frequency: "Always",
          },
        ],
      },
      {
        title: "Environmental Health",
        tips: [
          {
            title: "Avoid Pollution",
            description: "Limit exposure to air pollution, chemicals, and toxins when possible.",
            frequency: "Daily awareness",
          },
          {
            title: "Sun Protection",
            description: "Use sunscreen SPF 30+, wear protective clothing, and avoid peak sun hours.",
            frequency: "When outdoors",
          },
          {
            title: "Safe Driving",
            description: "Always wear seatbelts, avoid distracted driving, and follow traffic rules.",
            frequency: "Every trip",
          },
          {
            title: "Home Safety",
            description: "Install smoke detectors, secure rugs, and maintain good lighting to prevent accidents.",
            frequency: "Regular checks",
          },
        ],
      },
    ],
  },
  nutrition: {
    title: "Nutrition & Diet",
    description: "Proper nutrition provides your body with essential nutrients and helps prevent chronic diseases.",
    sections: [
      {
        title: "Balanced Diet",
        tips: [
          {
            title: "Eat Variety of Fruits",
            description: "Include 2-3 servings of different colored fruits daily for vitamins and antioxidants.",
            frequency: "Daily",
          },
          {
            title: "Include Vegetables",
            description: "Aim for 4-5 servings of vegetables daily, especially leafy greens and colorful varieties.",
            frequency: "Daily",
          },
          {
            title: "Choose Whole Grains",
            description: "Replace refined grains with whole grains like brown rice, quinoa, and whole wheat.",
            frequency: "Daily",
          },
          {
            title: "Lean Proteins",
            description: "Include fish, poultry, beans, and nuts while limiting red and processed meats.",
            frequency: "Daily",
          },
        ],
      },
      {
        title: "Healthy Eating Habits",
        tips: [
          {
            title: "Control Portions",
            description: "Use smaller plates and be mindful of serving sizes to maintain healthy weight.",
            frequency: "Every meal",
          },
          {
            title: "Limit Processed Foods",
            description: "Reduce intake of packaged, processed foods high in sodium, sugar, and unhealthy fats.",
            frequency: "Daily choice",
          },
          {
            title: "Reduce Added Sugar",
            description: "Limit sugary drinks, desserts, and snacks to prevent diabetes and weight gain.",
            frequency: "Daily awareness",
          },
          {
            title: "Cook at Home",
            description: "Prepare meals at home to control ingredients and portion sizes.",
            frequency: "Most meals",
          },
        ],
      },
    ],
  },
  exercise: {
    title: "Physical Activity",
    description: "Regular exercise strengthens your body, improves mental health, and reduces disease risk.",
    sections: [
      {
        title: "Cardiovascular Exercise",
        tips: [
          {
            title: "Aerobic Activity",
            description: "Engage in moderate aerobic activity like brisk walking, swimming, or cycling.",
            frequency: "150 min/week",
          },
          {
            title: "High-Intensity Intervals",
            description: "Include vigorous activities like running or high-intensity interval training.",
            frequency: "75 min/week",
          },
          {
            title: "Daily Movement",
            description: "Take stairs, park farther away, or walk during breaks to stay active throughout the day.",
            frequency: "Daily",
          },
          {
            title: "Outdoor Activities",
            description: "Enjoy hiking, biking, or sports for both exercise and vitamin D from sunlight.",
            frequency: "Weekly",
          },
        ],
      },
      {
        title: "Strength & Flexibility",
        tips: [
          {
            title: "Strength Training",
            description: "Include resistance exercises using weights, bands, or bodyweight exercises.",
            frequency: "2-3 times/week",
          },
          {
            title: "Flexibility Exercises",
            description: "Practice stretching, yoga, or tai chi to maintain flexibility and balance.",
            frequency: "Daily",
          },
          {
            title: "Core Strengthening",
            description: "Focus on exercises that strengthen your core muscles for better posture and stability.",
            frequency: "3 times/week",
          },
          {
            title: "Balance Training",
            description: "Include balance exercises to prevent falls, especially important as you age.",
            frequency: "2-3 times/week",
          },
        ],
      },
    ],
  },
  mental: {
    title: "Mental Health",
    description:
      "Mental wellness is crucial for overall health and helps prevent depression, anxiety, and stress-related illnesses.",
    sections: [
      {
        title: "Stress Management",
        tips: [
          {
            title: "Practice Meditation",
            description: "Spend 10-20 minutes daily in meditation or mindfulness to reduce stress and anxiety.",
            frequency: "Daily",
          },
          {
            title: "Deep Breathing",
            description: "Use deep breathing exercises during stressful situations to calm your mind and body.",
            frequency: "As needed",
          },
          {
            title: "Time Management",
            description: "Organize your schedule, set priorities, and avoid overcommitting to reduce stress.",
            frequency: "Daily planning",
          },
          {
            title: "Relaxation Techniques",
            description: "Try progressive muscle relaxation, aromatherapy, or listening to calming music.",
            frequency: "Daily",
          },
        ],
      },
      {
        title: "Social & Emotional Health",
        tips: [
          {
            title: "Maintain Relationships",
            description: "Nurture friendships and family relationships for emotional support and connection.",
            frequency: "Regular contact",
          },
          {
            title: "Seek Support",
            description: "Don't hesitate to talk to friends, family, or professionals when facing challenges.",
            frequency: "When needed",
          },
          {
            title: "Practice Gratitude",
            description: "Keep a gratitude journal or regularly reflect on positive aspects of your life.",
            frequency: "Daily",
          },
          {
            title: "Engage in Hobbies",
            description: "Pursue activities you enjoy to maintain mental stimulation and life satisfaction.",
            frequency: "Weekly",
          },
        ],
      },
    ],
  },
  hygiene: {
    title: "Personal Hygiene",
    description: "Good hygiene practices prevent infections and maintain overall health and social well-being.",
    sections: [
      {
        title: "Basic Hygiene",
        tips: [
          {
            title: "Hand Washing",
            description:
              "Wash hands thoroughly with soap for 20 seconds, especially before eating and after using restroom.",
            frequency: "Multiple times daily",
          },
          {
            title: "Dental Care",
            description: "Brush teeth twice daily, floss regularly, and visit dentist for checkups.",
            frequency: "Daily brushing, regular dental visits",
          },
          {
            title: "Body Cleanliness",
            description: "Shower or bathe regularly, especially after exercise or sweating.",
            frequency: "Daily or as needed",
          },
          {
            title: "Hair Care",
            description: "Wash hair regularly and maintain scalp health to prevent infections.",
            frequency: "2-3 times per week",
          },
        ],
      },
      {
        title: "Infection Prevention",
        tips: [
          {
            title: "Avoid Touching Face",
            description: "Minimize touching your eyes, nose, and mouth to prevent spreading germs.",
            frequency: "Always be mindful",
          },
          {
            title: "Cover Coughs/Sneezes",
            description: "Use tissue or elbow to cover coughs and sneezes, then wash hands.",
            frequency: "Every time",
          },
          {
            title: "Clean Living Spaces",
            description: "Regularly clean and disinfect frequently touched surfaces in your home.",
            frequency: "Daily/weekly",
          },
          {
            title: "Food Safety",
            description: "Wash fruits and vegetables, cook meat thoroughly, and store food properly.",
            frequency: "Every meal prep",
          },
        ],
      },
    ],
  },
  sleep: {
    title: "Sleep Health",
    description: "Quality sleep is essential for physical recovery, mental health, and immune function.",
    sections: [
      {
        title: "Sleep Schedule",
        tips: [
          {
            title: "Consistent Bedtime",
            description: "Go to bed and wake up at the same time every day, even on weekends.",
            frequency: "Daily",
          },
          {
            title: "Adequate Duration",
            description: "Aim for 7-9 hours of sleep per night for adults, 8-10 hours for teenagers.",
            frequency: "Nightly",
          },
          {
            title: "Pre-Sleep Routine",
            description: "Develop a relaxing bedtime routine to signal your body it's time to sleep.",
            frequency: "Every night",
          },
          {
            title: "Avoid Naps",
            description: "Limit daytime naps to 20-30 minutes and avoid napping late in the day.",
            frequency: "If needed",
          },
        ],
      },
      {
        title: "Sleep Environment",
        tips: [
          {
            title: "Dark Room",
            description: "Keep bedroom dark using blackout curtains or eye masks to promote melatonin production.",
            frequency: "Every night",
          },
          {
            title: "Cool Temperature",
            description: "Maintain bedroom temperature between 60-67°F (15-19°C) for optimal sleep.",
            frequency: "Nightly",
          },
          {
            title: "Comfortable Bedding",
            description: "Invest in a comfortable mattress and pillows that support good sleep posture.",
            frequency: "Replace as needed",
          },
          {
            title: "Limit Screen Time",
            description: "Avoid screens 1-2 hours before bedtime or use blue light filters.",
            frequency: "Every evening",
          },
        ],
      },
    ],
  },
}
