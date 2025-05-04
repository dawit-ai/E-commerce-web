import { Supplement } from "../component/pages/Supplement";

const supplementsData=[
  {
    id:1,
     pic:"whey-protein.png",
    title:"Whey Protein",
    description:"Fuel Your Muscles, Fast – High-quality protein for rapid muscle recovery and growth. Great taste and easy to mix.",
    Price:45,
    category:"Supplement"
  },
  {
    id:2,
     pic:"plant-protein.png",
    title:"Plant-Based Protein ",
    description:"Clean Gains, Naturally – Vegan protein blend for lean muscle and recovery, packed with essential amino acids.",
    Price:50,
    category:"Supplement"
  },
  {
    id:3,
     pic:"casein-protein.png",
    title:"Casein Protein",
    description:"Recover While You Sleep – Slow-digesting protein perfect for overnight muscle repair.",
    Price:48,
    category:"Supplement"
  },
  {
    id:4,
     pic:"pre-workout.png",
    title:"Pre Workout",
    description:"Power Up Every Session – Explosive energy, laser focus, and better endurance in every scoop.",
    Price:35,
    category:"Supplement"
  },
  {
    id:5,
     pic:"creatine.png",
    title:"Creatine Monohydrate",
    description:"Lift Stronger, Go Longer – Scientifically backed to increase strength and performance.",
    Price:35,
    category:"Supplement"
  },
  {
    id:6,
     pic:"post-workout.png",
    title:"Post-Workout Recovery Blend ",
    description:"Recharge and Rebuild – Carbs, protein, and electrolytes to replenish and speed up muscle recovery.",
    Price:38,
    category:"Supplement"
  },
  {
    id:7,
    pic:"bcaa.png",
    title:"BCAA Powder",
    description:"Train Harder, Recover Smarter – Supports muscle retention and reduces fatigue during intense workouts.",
    Price:25,
    category:"Supplement"
  },
  {
    id:8,
     pic:"fat-burner.png",
    title:"Fat Burner",
    description:"Ignite Your Metabolism – Thermogenic formula to support fat loss, energy, and focus.",
    Price:32,
    category:"Supplement"
  },
  {
    id:9,
     pic:"omega-3.png",
    title:"Omega-3",
    description:"Support Heart, Brain & Joints – Essential fatty acids to boost recovery and overall wellness.",
    Price:32,
    category:"Supplement"
  },
  {
    id:10,
     pic:"zam.png",
    title:"ZMA (Zinc, Magnesium, B6) ",
    description:"Rest Better, Recover Deeper – Promotes quality sleep, hormonal balance, and muscle recovery.",
    Price:23,
    category:"Supplement"
  },
  {
    id:11,
     pic:"multivitamin.png",
    title:"Multivitamin",
    description:"Complete Nutrition Daily – Designed to support energy, immunity, and active lifestyles.",
    Price:25,
    category:"Supplement"
  },
  {
    id:12,
     pic:"mass-gainer.png",
    title:"Mass Gainer ",
    description:"Bulk Up with Purpose – High-calorie formula loaded with protein, carbs, and essential nutrients. Designed for serious size and strength gains.",
    Price:55,
    category:"Supplement"
  },
  {
    id:13,
     pic:"glutamine.png",
    title:"Glutamine Powder",
    description:"Protect and Repair Muscles – Supports muscle recovery, boosts immune health, and reduces soreness after intense training sessions.",
    Price:34,
    category:"Supplement"
  }
  
];
export const getsupplements=()=>{
  return supplementsData
}