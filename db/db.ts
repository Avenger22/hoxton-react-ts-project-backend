import {
  Item, User, Subscribe, Article, 
  Company, Service, Coach, Favorite
} from '../types/typesDb'

export let items:Item[] = []
export let users:User[] = []
export let articles:Article[] = []
export let companies:Company[] = []
export let services:Service[] = []
export let coaches:Coach[] = []
export let favorites:Favorite[] = []
export let subscribe:Subscribe[] = []

items = [
    {
      id: 1,
      name: "Animal Pak Powder",
      price: "55",
      image: "/assets/images/animal-pak-powder.png",
      stock: 7,
      type: "multivitamins",
      date: "2021/12/20",
      quantity: 0,
      description: "The True Original since 1983, Animal Pack was developed to meet the needs of the world's most extreme athletes as well as the most extreme training sessions. The Ultimate Training Package is much more than just a multivitamin, but it is the credible, courageous foundation on which the most dedicated weightlifters and extreme athletes have built their diets.",
      favorite: false
    },
    {
      id: 2,
      name: "Artichoke Premium",
      price: "10",
      image: "/assets/images/artichoke-premium.jpg",
      stock: 5,
      type: "multivitamins",
      date: "2021/12/12",
      quantity: 0,
      description: "Artichoke Premium is a supplement containing high quality artichoke extracts with 5% standardized cinnar content.Research has shown that the extract of artichoke leaves:Helps in detoxification",
      favorite: false
    },
    {
      id: 3,
      name: "Argi Power 1500 Mega Caps",
      price: "30",
      image: "/assets/images/argi-power.jpg",
      stock: 5,
      type: "aminoacids",
      date: "2021/11/20",
      description: "Argi Power 1500 Mega Caps, mega capsules contain 1500 mg L-Arginine with the highest pharmaceutical quality in one capsule. How does L-Arginine HCl work and what is it used for? L-arginine is a dietary supplement that participates in many processes of formation of substances in the body: eg nitric oxide. Furthermore it provides the formamide group that serves in creatine biosynthesis.",
      quantity: 0,
      discountPrice: "24",
      favorite: false
    },
    {
      id: 4,
      name: "Beta-Alanine Xplode Powder",
      price: "28",
      image: "/assets/images/beta-alanine.jpg",
      stock: 5,
      type: "aminoacids",
      date: "2021/12/14",
      quantity: 0,
      favorite: false,
      description: "Beta-Alanine Xplode Powder supplement is a preparation in the form of a powder with perfect solubility, which contains very high quality Beta-Alanine, enriched with vitamin B6 and L-Histidine."
    },
    {
      id: 5,
      name: "Dymatize Elite 100 % Whey",
      price: "65",
      image: "/assets/images/Chocolate-Fudge.jpg",
      stock: 3,
      type: "proteins",
      date: "2021/10/08",
      quantity: 0,
      favorite: false,
      description: "The perfect whey protein anytime! Are you looking for a high value whey protein? Whether you seek to support muscle growth after an intense workout or simply seek to increase your daily protein intake."
    },
    {
      id: 6,
      name: "ON Gold Standard 100% Whey",
      price: "85",
      image: "/assets/images/gold-standard.jpg",
      stock: 6,
      type: "proteins",
      date: "2021/10/15",
      quantity: 0,
      favorite: false,
      description: "Gold Standard 100% Whey is considered the best whey protein in the world based on its combination of flavor, high protein content, and easy digestion. Gold Standard 100% Whey contains whey isolated protein, or WPI. Rated with over 90% pure protein, WPI is known as the highest quality ingredient."
    },
    {
      id: 7,
      name: "BSN True Mass 1200",
      price: "75",
      image: "/assets/images/bsn-true-mass.png",
      stock: 4,
      type: "weight-gainers",
      date: "2021/12/16",
      quantity: 0,
      favorite: false,
      description: "TRUE-MASS® 1200 contains the unique ultra premium protein formula to nourish an athlete's muscles with the essential building blocks of protein. The unique mix of carbohydrates provides the caloric support needed to support extreme physical activity, helping the body prepare as well as supporting regeneration from intense exercise. Carbohydrates and fats provide energy that burns quickly during strenuous physical activity",
      discountPrice: "64"
    },
    {
      id: 8,
      name: "Gain Bolic 6000G",
      price: "19",
      image: "/assets/images/gain-bolic.jpg",
      stock: 10,
      type: "weight-gainers",
      date: "2021/09/20",
      quantity: 0,
      favorite: false,
      description: "It is a mixture of carbohydrates with different glycemic index with protein complexes that help increase muscle mass, enriched with carefully selected portions of creatine monohydrate and taurine. Creatine use helps increase physical capacity during short,high-intensity workouts. "
    },
    {
      id: 9,
      name: "Animal M-Stak",
      price: "64",
      image: "/assets/images/animal-m-stak.png",
      stock: 6,
      type: "testosterone-boosters",
      date: "2021/10/10",
      quantity: 0,
      favorite: false,
      description: "What is Animal M-Stak? A natural, non-hormonal supplement designed for the most stubborn of all hard-gainers, from beginners to diehards themselves, we've been through it all. You can not gain another pound, the workouts are stagnant, the weights are static. This is hard-gainer syndrome, and from the thinnest ectomorphs to the most muscular endomorph, we ve all been there."
    },
    {
      id: 10,
      name: "BCAA-X",
      price: "17",
      image: "/assets/images/bcaa-x.jpg",
      stock: 8,
      type: "aminoacids",
      date: "2021/12/12",
      quantity: 0,
      favorite: false,
      description: "Branched chain amino acids (BCAAs) are an important group of essential amino acids consisting of Leucine, Isoleucine and Valine. BCAAs are among the nine essential amino acids for humans because our bodies cannot produce them.",
      discountPrice: "12"
    },
    {
      id: 11,
      name: "Beta- Carotene",
      price: "12",
      image: "/assets/images/beta-carotene.jpg",
      stock: 5,
      type: "multivitamins",
      date: "2021/11/05",
      quantity: 0,
      favorite: false,
      description: "In nature, Beta Carotene is the precursor of vitamin A (inactive form). Plant carotenoids are the main dietary source of provitamin A.One molecule of Beta Carotene can be broken down by an intestinal enzyme into two molecules of Vitamin A."
    },
    {
      id: 12,
      name: "Daily Vitamin",
      price: "20",
      image: "/assets/images/daily-vitamin.jpg",
      stock: 0,
      type: "multivitamins",
      date: "2021/11/28",
      quantity: 0,
      favorite: false,
      description: "Daily Vita-Min is an advanced multi-vitamin and mineral formula with 27 active ingredients! It contains a complex of B vitamins, vitamin C and a higher level of Vitamin D (up to 1000% NRV), plus essential minerals including Selenium, Zinc and Chromium."
    },
    {
      id: 13,
      name: "MuscleTech Nitro-Tech",
      price: "86",
      image: "/assets/images/muscle-tech.jpg",
      stock: 2,
      type: "proteins",
      date: "2021/07/20",
      quantity: 0,
      favorite: false,
      description: "NITRO-TECH® is a scientifically created whey protein formula that improves with the most studied form of creatine for results and better muscle and strength. It also contains whey protein, which is the most popular type of protein."
    },
    {
      id: 14,
      name: "Scitec 100 % Kompleks Casein",
      price: "32",
      image: "/assets/images/scitec.jpg",
      stock: 1,
      type: "proteins",
      date: "2021/06/10",
      quantity: 0,
      favorite: false,
      description: "100% Casein Complex is a blend of milk proteins with predominant micellar casein, exclusively from caseit milk proteins. Casein is rich in branched-chain essential amino acids (BCAAs) and has a very high content (more than serum) of L-glutamine, the most abundant free-form amino acid in human blood.",
      discountPrice: "21"
    },
    {
      id: 15,
      name: "Blackweiler Shred",
      price: "40",
      image: "/assets/images/blackweiler-shred.jpg",
      stock: 0,
      type: "pre-workouts",
      date: "2021/06/15",
      quantity: 0,
      favorite: false,
      description: "You will feel the dark power of BLACKWEILER SHRED, which will illuminate you from within. Nothing can stop you now before you undergo the best training in your life! You stand together, you and your new ally in the fight to build your dreams. Remember one thing - you will not be prepared for what will happen now! Your muscles will fill with blood, your body will burst into sweat and your mind will open up to new sensations!"
    },
    {
      id: 16,
      name: "L-carnitine 1500 extreme mega caps",
      price: "45",
      image: "/assets/images/carnitine.jpg",
      stock: 3,
      type: "weight-burner",
      date: "2021/06/17",
      quantity: 0,
      favorite: false,
      description: "1000 mg L- Carnitine in its purest form which transports free fatty acids to the mitochondria where the oxygenation process takes place."
    },
    {
      id: 17,
      name: "Scitec Shredex",
      price: "35",
      image: "/assets/images/shredex.jpg",
      stock: 5,
      type: "weight-burner",
      date: "2021/08/14",
      quantity: 0,
      favorite: false,
      description: "SHREDEX is a stimulant, Sinefirine for weight loss and body management. It provides 16 ingredients, including L-Carnitine, Hydroxycitric Acid (HCA) from Garcinia Cambodia extract and Epigalocatechin galate (EGCG) from Green Tea Extract and contributes to body weight control and hunger."
    },
    {
      id: 18,
      name: "Scitec Restyle",
      price: "30",
      image: "/assets/images/restyle.jpg",
      stock: 4,
      type: "weight-burner",
      date: "2021/09/17",
      quantity: 0,
      favorite: false,
      description: "When you want to get in better shape, you need to reform your life: your eating habits and your level of physical activity. When you do, we suggest you get our ReStyle formula too! It is a complex of 12 ingredients, stimulus of body weight and body management.",
      discountPrice: "16"
    },
    {
      id: 19,
      name: "Caffeine 100 Caps",
      price: "10",
      image: "/assets/images/cafeine.jpg",
      stock: 6,
      type: "weight-burner",
      date: "2021/09/10",
      quantity: 0,
      favorite: false,
      description: "Coffee has hundreds of chemical ingredients in it, some of which can counteract the positive effects of caffeine. However, with pure caffeine, the desired doses can be obtained without any possible hindrance. Our caffeine capsules allow an efficient, accurate and high-dose use."
    },
    {
      id: 20,
      name: "Creatine monohydrate powder",
      price: "25",
      image: "/assets/images/creatine-powder.jpg",
      stock: 1,
      type: "creatine",
      date: "2021/09/19",
      quantity: 0,
      favorite: false,
      description: "Creatine monohydrate powder is a supplement that aims to meet the expenditures that come from intense muscular exercise, especially in athletes. This product delivers a pure pharmaceutical grade monohydrate creatine."
    },
    {
      id: 21,
      name: "MuscleTech Platinum 100% Creatine",
      price: "30",
      image: "/assets/images/muscletech-platinum.jpg",
      stock: 2,
      type: "creatine",
      date: "2021/12/17",
      quantity: 0,
      favorite: false,
      description: "Ultra-pure micronized creatine that helps define defined muscle growth!Pure creatine monohydrate powder"
    },
    {
      id: 22,
      name: "Scitec 100% Creatine Monohydrate",
      price: "15",
      image: "/assets/images/scitec-creatine.jpg",
      stock: 4,
      type: "creatine",
      date: "2021/06/05",
      quantity: 0,
      favorite: false,
      description: "Creatine is an organic nitric acid that occurs in vertebrates. Approximately 95% of creatine in the body is found in skeletal muscle. It helps supply energy to all cells, mainly muscles, by increasing the formation of Adenosine TriPhosphate (ATP) which acts as a cellular energy reserve, for muscle contractions.",
      discountPrice: "7"
    },
    {
      id: 23,
      name: "Scitec Jumbo",
      price: "90",
      image: "/assets/images/jumbo.jpg",
      stock: 1,
      type: "weight-gainers",
      date: "2021/05/13",
      quantity: 0,
      favorite: false,
      description: "It has been proven that people overestimate their current nutrient intake when trying to gain muscle mass. In other words, they eat less than they think they need sustainable and significant progress!"
    },
    {
      id: 24,
      name: "ON Serious Mass",
      price: "90",
      image: "/assets/images/seriousmass.jpg",
      stock: 3,
      type: "weight-gainers",
      date: "2021/03/10",
      quantity: 0,
      favorite: false,
      description: "A serious weight gain requires serious calories. However, those who need extra calories often find it difficult to consume those calories. For those who aspire to be bigger but who have a very active metabolism or have little appetite make consuming enough calories just through whole foods a real challenge. With SERIUOS MAS, you will have nothing to lose and much to gain.",
      discountPrice: "60"
    },
    {
      id: 25,
      name: "MuscleTech Mass-Tech Extreme 2000",
      price: "70",
      image: "/assets/images/extreme.jpg",
      stock: 4,
      type: "weight-gainers",
      date: "2021/01/16",
      quantity: 0,
      favorite: false,
      description: "Bodybuilders and weightlifters are always looking for a supplement to help them break the doors of size game. Whether you are stuck in a frustrating mass building program or just have a hard time building muscle mass, you now have a help to break your blockade. It is called MASS-TECH EXTREME 2000!"
    },
    {
      id: 26,
      name: "Tribusterone 90",
      price: "30",
      image: "/assets/images/tribusteron.jpg",
      stock: 2,
      type: "testosterone-boosters",
      date: "2021/04/25",
      quantity: 0,
      favorite: false,
      description: "Contains an aqueous, powdered extract of a plant root.Source of plant steroids, alkaloids and flavonoids."
    },
    {
      id: 27,
      name: "Stanabol-X",
      price: "45",
      image: "/assets/images/stanabol-X.jpg",
      stock: 8,
      type: "testosterone-boosters",
      date: "2021/07/20",
      quantity: 0,
      favorite: false,
      description: "Stanabol - X is a synergistic complex of 25 known anabolic substrates, Anabolic Stack modulates testosterone and other anabolic hormones such as insulin, growth hormone HGH and IGF-1 and thyroid hormones T3 and T4.",
      discountPrice: "33"
    },
    {
      id: 28,
      name: "Testo Punch",
      price: "35",
      image: "/assets/images/testo-punch.jpg",
      stock: 6,
      type: "testosterone-boosters",
      date: "2021/06/17",
      quantity: 0,
      favorite: false,
      description: "TESTO PUNCH is an ultra-sophisticated, comprehensive matrix of Testosterone, Estrogen and Libido, with 12 powerful carefully selected ingredients! In addition to DAA (D-Aspartic Acid) and herbal ingredients - including Maca - it provides important vitamins and minerals!"
    },
    {
      id: 29,
      name: "Scitec  100% Peanut Butter",
      price: "22",
      image: "/assets/images/scitec-100-peanut-butter.jpg",
      stock: 5,
      type: "proteins",
      date: "2021/03/21",
      quantity: 0,
      favorite: false,
      description: "100% PEANUT BUTTER is made from blanched, clean and healthy argentinian arachid peanuts and it is a natural source of protein, carbs and fats. The mono and polyunsaturated fats within 100% PEANUT BUTTER make it great for athletes concerned with maintaining a heart healthy and balanced diet. Replacing saturated fats with unsaturated fats in the diet contributes to the maintenance of normal blood cholesterol levels. R"
    },
    {
      id: 30,
      name: "Scitec 100% Whey Isolate",
      price: "65",
      image: "/assets/images/whey-isolate.jpg",
      stock: 5,
      type: "proteins",
      date: "2021/07/29",
      quantity: 0,
      favorite: false,
      description: "100% Whey Isolate is an excellent quality whey protein isolated and fortified with the fastest absorption hydrolysis of whey. This formula is lower in carbohydrates than ever before!"
    },
    {
      id: 31,
      name: "Scitec Super Hero",
      price: "40",
      image: "/assets/images/scitec-super-hero.jpg",
      stock: 15,
      type: "pre-workouts",
      date: "2020/05/22",
      quantity: 0,
      favorite: false,
      description: "SUPERHERO është një produkt i ri pre-workout revulucionar nga SCITEC në linjën e saj professional! Me përbërës të pa-përdorur më parë, duke përfshirë aktive me cilësi të lartë, SUPERHERO është formula më e lartë që duhet të provoni!"
    },
    {
      id: 32,
      name: "Scitec Taurine",
      price: "10",
      image: "/assets/images/scitec-taurine.jpg",
      stock: 10,
      type: "aminoacids",
      date: "2020/12/12",
      quantity: 0,
      favorite: false,
      description: "Taurina gjendet natyrshëm në ushqimet me origjinë shtazore, por praktikisht mungon në ushqimet me origjinë bimore. Prandaj nivelet e Taurinës mund të jenë më të ulëta në një individ vegjetarian sesa tek një grup individësh me një dietë standarde të balancuar."
    },
    {
      id: 33,
      name: "Scitec T-360",
      price: "32",
      image: "/assets/images/scitec-t-360.jpg",
      stock: 5,
      type: "testosterone-boosters",
      date: "2021/10/11",
      quantity: 0,
      favorite: false,
      description: "Arginina është pararendësi i oksidit nitrik (ON). Formula jonë T-360 përmban gjithashtu L-Karnitinë, AçetiI L-Karnitine si dhe L-Karnitinë L-Tartrate. Zinku kontribuon në ruajtjen e niveleve normale të testosteronit, fertilitetit normal, riprodhimit, si dhe sintezës normale të proteinave *. Ky kombinim përbërësish e bën T-360-n shumë popullor, sidomos në mesin e meshkujve dhe në mesin e atyre që stërviten fortë.* Këto deklarata janë vërtetuar shkencërisht nga Autoriteti Evropian i Sigurisë Ushqimore (EFSA) dhe i autorizuar nga Komisioni Evropian (KE)."
    },
    {
      id: 34,
      name: "Scitec Shredex",
      price: "35",
      image: "/assets/images/scitec-shredex.jpg",
      stock: 18,
      type: "weight-burner",
      date: "2022/01/17",
      quantity: 0,
      favorite: false,
      description: "SHREDEX është një stimulues, Sinefirine për rënie dhe menaxhimi të peshës së trupit. Ai siguron 16 përbërës, duke përfshirë L-Karnitinë, Acid Hydroksicitrik (HCA) nga ekstrakti i Garcinia kamboxhia dhe Epigalokatekin galate (EGCG) nga Ekstrakti i Çajit të Gjelbër dhe kontribuonë në kontrollin e peshës trupore dhe urisë. SHREDEX përmban Kromin që kontribuon në metabolizmin normal makronutrient dhe në ruajtjen e niveleve normale të glukozës në gjak. * * Këto deklarata janë vërtetuar shkencërisht nga Autoriteti Evropian i Sigurisë Ushqimore (EFSA) dhe autorizuar nga Komisioni Evropian (KE)."
    },
    {
      id: 35,
      name: "Thermo x",
      price: "75",
      image: "/assets/images/scitec-thermo-x.jpg",
      stock: 12,
      type: "weight-burner",
      date: "2021/10/15",
      quantity: 0,
      favorite: false,
      description: "THERMO-X është një stimulues kompleks i menaxhimit të peshës së trupit pa efedrinë si dhe i butë në kafeinë. Ai siguron disa përbërës, duke përfshirë Acidin Hidroksicitrik (HCA) nga Ekstrakti Garcinia Kamboxhia, që kontribuon në kontrollin e peshës trupore dhe ndjenjës së urisë."
    },
    {
      id: 36,
      name: "Scitec Turbo Ripper",
      price: "25",
      image: "/assets/images/scitec-turbo-ripper.jpg",
      stock: 2,
      type: "weight-burner",
      date: "2021/10/18",
      quantity: 0,
      favorite: false,
      description: "High doses of sustained release caffeine, acetyl l-carnitine, green tea, synephrine & more! TURBO RIPPER gives you many of the ingredients you know and love – in significant doses! We have L-Carnitine and not just ordinary L-Carnitine, but the more complex Acetyl L-Carnitine (ALC) in a whopping dose – you probably won t want to take Carnitine separately!"
    },
    {
      id: 37,
      name: "Scitec Tyrosine",
      price: "12",
      image: "/assets/images/scitec-tyrosine.jpg",
      stock: 13,
      type: "aminoacids",
      date: "2019/12/19",
      quantity: 0,
      favorite: false,
      description: "L-Tyrosine is a conditionally essential amino acid, which occurs naturally in foods, mainly as part of proteins. It is one of the 22 amino acids that are used by cells to synthesize proteins. Dietary L-Tyrosine is provided by mixed dietary protein intakes from different sources and it can also be consumed in the form of supplements. It s popular among athletes to take pure L-Tyrosine before workouts, especially with Caffeine."
    },
    {
      id: 38,
      name: "Selenium",
      price: "8",
      image: "/assets/images/selenium.jpg",
      stock: 4,
      type: "aminoacids",
      date: "2020/10/9",
      quantity: 0,
      favorite: false,
      description: "Selenium is an essential micronutrient for humans and it contributes to normal spermatogenesis, the maintenance of normal hair and nails, normal function of the immune system and normal thyroid function, and also to the protection of cells from oxidative stress*. *These statements have been scientifically proven by the European Food Safety Authority (EFSA) and authorized by the European Commission (EC)."
    },
    {
      id: 39,
      name: "Shark Cartilage",
      price: "15",
      image: "/assets/images/kërce-peshkaqeni.jpg",
      stock: 1,
      type: "aminoacids",
      date: "2022/02/9",
      quantity: 0,
      favorite: false,
      description: "This formula contains shark cartilage powder. It is a natural source of Chondroitin Sulfate. Each serving delivers 2960 mg shark cartilage powder. Manganese contributes to the maintenance of normal bones and to the normal formation of connective tissue. These statements have been scientifically proven by the European Food Safety Authority (EFSA) and authorized by the European Commission (EC)."
    },
    {
      id: 40,
      name: "Shaker 750 ml",
      price: "5",
      image: "/assets/images/shaker.jpg",
      stock: 25,
      type: "proteins",
      date: "2019/01/01",
      quantity: 0,
      favorite: false,
      description: "Shake is a product made by our company"
    },
    {
      id: 41,
      name: "Ashwagandha Premium",
      price: "35",
      image: "/assets/images/09.jpg",
      stock: 10,
      type: "aminoacids",
      date: "2020/05/07",
      quantity: 0,
      favorite: false,
      description: "Ashwagandha Premium  është një suplement dietik në kapsula, që përmban ekstrakte të rrënjës Ashwagandha (Withania somnifera L.). Ashwagandha ka një efekt të dobishëm në ndërtimin e rezistencës së trupit ndaj faktorëve të stresit."
    },
    {
      id: 42,
      name: "Super Guarana",
      price: "12",
      image: "/assets/images/super-guarana.jpg",
      stock: 5,
      type: "aminoacids",
      date: "2022/02/15",
      quantity: 0,
      favorite: false,
      description: "Guarana is a natural, herbal source of Caffeine and other phytochemicals. It s seeds contain about twice the concentration of Caffeine found in coffee beans. Guarana contains widely varying mixtures of xanthine alkaloids other than Caffeine, including Theophylline and Theobromine and other substances such as polyphenols. It has traditionally been used as a refresher. Our SUPER GUARANA also provides Calcium that contributes to normal energy-yielding metabolism, normal muscle function and neurotransmission, the maintenance of normal bones and teeth"
    },
    {
      id: 43,
      name: "Scitec Intra Edge",
      price: "45",
      image: "/assets/images/edge.jpg",
      stock: 7,
      type: "proteins",
      date: "2021/03/04",
      quantity: 0,
      favorite: false,
      description: "Our INTRA EDGE intra-workout formula is based on pure Cluster Dextrin® branded highly branched cyclic dextrin carbohydrate, which is a new type of dextrin that is produced from amylopectin. Cluster Dextrin® is highly soluble in water and the solution is highly stable during storage. Cluster Dextrin® contributes little to osmotic pressure meaning that it is absorbed very fast without negative intestinal problems."
    },
    {
      id: 44,
      name: "Scitec Jumbo",
      price: "55",
      image: "/assets/images/scitec-jumbo-4400g-500x500.jpg",
      stock: 20,
      type: "proteins",
      date: "2021/03/04",
      quantity: 0,
      favorite: false,
      description: "It s been shown that people tend to overestimate their actual nutrient consumption when trying to gain muscle and brawn. In other words, they eat less than they think and they need for steady and significant progress!"
    },
    {
      id: 45,
      name: "Scitec Liquid Carni-X 100 000",
      price: "25",
      image: "/assets/images/scitec-liquid-carni-x-100-000.jpg",
      stock: 1,
      type: "creatine",
      date: "2022/01/95",
      quantity: 0,
      favorite: false,
      description: "LIQUID CARNI-X 100 000 provides 2500 mg of L-carnitine per serving in a popular liquid form. Being a source of Vitamin C, it provides 225% of the official Nutrient Reference Value. Vitamin C contributes to normal energy-yielding metabolism."
    },
    {
      id: 46,
      name: "Scitec Mega Arginine 120 Caps",
      price: "25",
      image: "/assets/images/scitec-mega-arginine-120-caps.jpg",
      stock: 4,
      type: "aminoacids",
      date: "2021/08/23",
      quantity: 0,
      favorite: false,
      description: "L-arginine is a conditionally essential amino acid, that is, under normal circumstances the human body can synthesize it to satisfy their needs. In the case of poor nutrition or intense physical exercise, the biosynthetic pathway can not produce sufficient amounts of arginine, therefore, a part must be supplemented with diet or supplements."
    },
    {
      id: 47,
      name: "Scitec Lysine",
      price: "10",
      image: "/assets/images/scitec-lysine.jpg",
      stock: 7,
      type: "aminoacids",
      date: "2022/12/23",
      quantity: 0,
      favorite: false,
      description: "L-Lysine is an essential amino acid that s a physiological building block for the proteins in the body and it is found in large amounts in muscle tissue. The 9 essential amino acids the body cannot synthesize and must be supplied by the diet, including sport supplements."
    },
    {
      id: 48,
      name: "Scitec 100% Hydrolyzed Whey Protein",
      price: "35",
      image: "/assets/images/scitec-100-hydrolyzed-whey-protein.jpg",
      stock: 5,
      type: "proteins",
      date: "2021/08/22",
      quantity: 0,
      favorite: false,
      description: "Whey protein is generally considered the best sports nutrition protein type. Whey concentrates and isolates represent varying degrees of processing and quality, but the protein remains intact, while hydrolyzation breaks intact protein into smaller parts, therefore the speed of digestion, absorption and utilization is the highest among all protein types! This ultra fast absorption makes hydrolyzed whey protein the best after training (or in between multiple daily sessions) and first thing in the morning"
    },
    {
      id: 49,
      name: "Scitec 100% L-Glutamine",
      price: "30",
      image: "/assets/images/l-glutamine-scitec.jpg",
      stock: 7,
      type: "creatine",
      date: "2021/09/09",
      quantity: 0,
      favorite: false,
      description: "Glutamine is the most abundant amino acid in the human blood. Glutamine may become conditionally essential in certain situations, including intensive physical training, when the body cannot meet its needs by synthesizing glutamine. This conditionally essential amino acid can be provided by dietary protein intake, including by food supplements."
    },
    {
      id: 50,
      name: "Scitec 100% Plant Protein",
      price: "22",
      image: "/assets/images/scitec-100-plant-protein.jpg",
      stock: 25,
      type: "proteins",
      date: "2022/02/01",
      quantity: 0,
      favorite: false,
      description: "Pea protein is among the top plant proteins regarding nutritional value. According to scientifi\u00adc fi\u00adndings the essential amino acid profi\u00adle makes it ideal for human consumption. The occurrence of special aminos relevant to sports nutrition is exceptional. With great Glutamine, Lysine and BCAA content it s comparable even to whey protein, while in Arginine it is outstanding, much better than whey! Digestive retention of pea protein is very high, human studies revealed around 98% digestibility rate. As a plus, this protein suppresses hunger e‑fficiently by its slow digestion and by acting directly on satiety factors"
    }
]

users = [
  {
    email: "jurgenhasmeta@yahoo.com",
    password: "eoeeojejoojpe",
    userName: "jurgenhasmeta12",
    fullName: "jurgen",
    signedIn: true,
    id: 1
  },
  {
    email: "jurgenhasmeta222@yahoo.com",
    password: "interi",
    userName: "jurgenhasmeta1222",
    fullName: "jurgenhaha",
    signedIn: false,
    id: 2
  },
  {
    email: "jurgenhasmeta11@yahoo.com",
    password: "huehuehuieiueuhi",
    userName: "jurgenhasmeta122",
    fullName: "jurgen22",
    signedIn: true,
    id: 3
  },
  {
    email: "jurgen@email.com",
    password: "123456",
    userName: "avenger22",
    fullName: "jurgen22",
    signedIn: true,
    id: 4
  }
]

subscribe = [
    {
      email: "jurgen@email.com",
      id: 1
    }
]

articles = [
    {
      id: 1,
      image: "/assets/images/pages-images/blog-images/blog-enlarged-1.jpg",
      title: "The right time to take Supplements",
      desc: "The best time to take creatine Whenever you find it easiest to take creatine is probably good enough. Theres not a lot of research indicating that taking it at one particular time is significantly better than any other. Personally, I like to…",
      user: "admin",
      category: "Supplements",
      date: "02/03/2021",
      paragraph: "Whenever you find it easiest to take creatine is probably good enough. There's not a lot of research indicating that taking it at one particular time is significantly better than any other. Personally, I like to take a blend of creatine, carbs (in the form of juice), and protein about half an hour before training, and the same blend after training. \n This is also the basic approach that Dr. Jim Stoppani advocates in the article “Ask the Supplement Guru: When Should I Take Creatine?” This “bracketing” technique helps set up an anabolic (muscle-building) state for your muscles and helps prevent muscle breakdown from a workout (catabolism). \n You ll be well stocked with anabolic amino acids when you re most receptive to them, you re topped off with carbs both during and after training, and you re always full of creatine. \n If the before-and-after technique is too complicated for you, just taking 5 grams post-workout is also very effective at producing strength and size gains, according to a 2013 study.1 Third place would be 5 grams whenever works for you. \n \n When you first start taking creatine, it s common to load with 20-25 grams per day in 5 gram servings for five days. \n \n This is effective, but not totally necessary. Just 3-5 grams a day will get you to the same place soon enough, writes Ciaran Fairman in “Do I Need to Load With Creatine. \n The best time to take glutamine \n \n The standard protocol for glutamine is to take 2-3 servings of 5 grams a day, with one of them right before bed. This is what I recommend as well, and in my book, the dose before bed is the most important! \n Sleep is already the time when you experience the greatest releases of growth hormone, and not coincidentally, it s the time when you turn all that hard work you ve been doing into physical results. \n \n Glutamine is also thought to be able to help combat symptoms of overtraining, so pairing it with deep, recuperative rest is a no-brainer.2Aside from that, 5 grams in the morning and 5 grams during a workout remain tried-and-true recommendations.",
      header1: "The best time to take Creatine"
    },
    {
      id: 2,
      image: "/assets/images/pages-images/blog-images/blog-enlarged-2.jpg",
      title: "3 Main Reasons You Need To Use BCAA-S",
      desc: "If you ve made the commitment to start a weightlifting workout program, the next step that you must take is getting your nutrition and supplement protocol in line!  If you ve made the commitment to start investing time regularly in a weightlifting workout…",
      user: "admin",
      category: "Supplements",
      date: "10/05/2021",
      paragraph: "If you ve made the commitment to start a weightlifting workout program, the next step that you must take is getting your nutrition and supplement protocol in line! \n If you ve made the commitment to start investing time regularly in a weightlifting workout program, the next step that you must take is getting your nutrition and supplement protocol in line so that you are able to maximize the results you get from your workouts. \n Failing to take into account this portion of the equation is a critical mistake. Not only will you not be as effective at changing your body composition, but you likely won t have the energy you otherwise would to put into those workouts. \n Getting a full spectrum of amino acids tops the list of important “musts” that need to be covered, so that s where you should start off when planning your supplement program. \n The following are some of the top reasons why investing in a BCAA supplement is a smart move. The first thing you ll experience if you choose to supplement your diet with branched-chain amino acids (BCAAs) is immune system support. Every time you go into the gym and lift weights, you are placing an enormous amount of stress on the body. If the body is not able to fully tolerate this stress level, you re going to see problems develop regarding muscle recovery, and possibly an increased likelihood of illness. \n \n Because the essential amino acids cannot be produced by the body and must be consumed directly, if you fail to get these in your body, it will not have everything it needs to maintain a normal, healthy immune system. \n \n Further, one study performed by the Laboratory of Human Nutrition for Athletes suggested that taking branched-chain amino acids around exercise also decreased the immune system response that is demonstrated.",
      header1: "BCAAS And The Immune System:"
    },
    {
      id: 3,
      image: "/assets/images/pages-images/blog-images/blog-enlarged-3.jpg",
      title: "What is Creatine Monohydrate",
      desc: "Creatine Monohydrate is a natural acid found mainly in red meat, especially beef and fish. However, although we can take it from natural sources of food,to see increased performance we have to consume it in larger doses and that is…",
      user: "admin",
      category: "Supplements",
      date: "13/12/2021",
      paragraph: "Creatine Monohydrate is a natural acid found mainly in red meat, especially beef and fish. However, although we can take it from natural sources of food,to see increased performance we have to consume it in larger doses and that is why Creatine is a popular food supplement and effective among athletes, both male or female. Creatine is obtained from a combination of three amino acids: arginine, glycine and methionine and is therefore nitrogen. It is important to maintain a positive nitrogen balance to promote muscle growth and development through regular sources of protein which can then be broken down into amino acids needed for repair, recovery and growth. \n \n How Does Creatine Work \n \n Creatine monohydrate is used as an additional source to significantly increase the concentration of creatine in skeletal muscles where it is stored as creatine phosphate, to drive issued phosphate anaerobic activity (movement with the high intensity and powerful such as sprinting, circuits, etc.), the co-molecule  Adenosine Tri Phosphate (ATP) uses this phosphate to meet some cellular and metabolic functions. \n ATP is broken down into Adenosine Di – Phosphate (ADP), when it loses one of its phosphate molecules, it provides the energy in your cell. When ATP s stores are reduced, levels of performance and intensity of exercise will fall. Creatine phosphate helps to restore ATP which is why increasing the performance and intensity, strength and power. And athletes and regular gym clients who are looking to increase the force and their training intensity have many benefits from creatine. Athletes like Linford Christie, Sally Gunnell and Colin Jackson were the first athletes in the early 1990s that saw concrete results from the use of creatine and since then athletes increasingly have used it as a supplement food safe and legal (it is considered 100% legal by the World Anti Doping Agency).Studies by Becqueetal (2000) showed a 20% increase in muscle strength of biceps achieved after 6 weeks of regular use of creatine compared with an increase of 10% of those who did not take creatine.",
      header1: "How Does creatine work ?"
    },
    {
      id: 4,
      image: "/assets/images/pages-images/blog-images/blog-enlarged-4.jpg",
      title: "Ronnie Coleman – Was he the best ever ?",
      desc: "When we talk about Mr. Olympia champions it s all about “gold and glitter”. They are the best of the best, the finest sons of bodybuilding who reigned supreme during their eras. There is one with the nickname “The King”, and…",
      user: "admin",
      category: "BodyBuilding",
      date: "17/12/2021",
      paragraph: "When we talk about Mr. Olympia champions it s all about “gold and glitter”. They are the best of the best, the finest sons of bodybuilding who reigned supreme during their eras. There is one with the nickname “The King”, and it fits him well. \n Longevity is the name of the game in our sport. You don t want to be a one hit wonder, go all guns blazing for a show or two and then drown in anonymity. Everybody wants to rule the world for as long as they can. So it s no wonder that, during it s 50+ years of existence, Olympia Sandows crowned only 13 guys. That solidified the point that, if you nail it in bodybuilding once, it just might be good enough to work twice, three or even eight times. \n The first long-lasting champion was Arnold. His charms were as powerful as his muscles and it showed on the stage – where it mattered most! After his absence there was somewhat of a turbulence in bodybuilding with quite a few guys exchanging Sandows. \n And so came Lee Haney. Truer gentleman was never found in bodybuilding, and his intimidating physique sported classical lines as well as formidable mass. He broke the mold, and when on to break the record! 8 Olympias straight he was undefeated and it was never a case of “well this guys could have won it” or “he s just loved by the judges”. \n Yates was the man to come after Lee and the Brit showed his grit as good as he could! So good that he ensured himself 6 wins straight at the Olympia stage. Known for taking the bodybuilding sport into the next era, Dorian had the mass as well as being razor sharp on stage. He was not what you would call a pretty boy, but he had so much going on that beating him was out of the question for everyone. \n Then there is this Texan guy who ate Pizzas and joined the gym with no bodybuilding dreams. Ronnie Coleman was not always the towering giant we all know him to be. He was in fact just a guy who agreed to compete because Metroflex offered him free gym membership. Who knows, maybe if there were more gyms offering free memberships we would have more world class bodybuilders? \n Joking aside, Ronnie was a late bloomer. Sure, he was a good national level athlete and it was obvious that he could have a career as a pro. But I ll bet you no one ever told him that he would be the greatest bodybuilder of all time. Even if someone told him that, he wouldn t believe it to be true. \n Yet he became just that, but boy, was it a bumpy ride! He was te only Mr.Olympia ever to be dead last in his first Olympia showing. The judges ranked him so low that he wasn t even compared to the other guys. If you think last callout sounds bad – try imagining no callouts, just standing there in tiny trunks getting ready for some shaming to kick in. \n He erupted to greatness in 1998. Falling to his knees, Ronnie didn t believe that he actually did it. In fact, neither did Flex Wheeler who came in second! When Yates retired everyone knew that a new champion would be crowned, but hell, who would ve guessed that it would be Ronnie? He was a good pro up until that point, but not the best. \n His reign of terror was as long as Haney s but with one major thing going to his credit. He had the strongest, toughest competitors ever as his competition. I mean Levrone, Wheeler, Ray, Ruhl, Gunter, Cutler – you name it, he faced them and beat them. Impressive feat for a guy that was not even compared during his first Olympia. \n The thing that makes him probably the greatest of all time is his body (what else?). His package could still be the winning one even after he competed against all these modern era bodybuilders. The Big Nasty never gave up, and that s why he s the King.",
      header1: "Ronnie Coleman story and history"
    },
    {
      id: 5,
      image: "/assets/images/pages-images/blog-images/blog-enlarged-5.jpg",
      title: "Why do we call it – “Classic Bodybuilding ?",
      desc: "There s a new division in our sport and it has a lovely ring to it s name! Classic physique , or classic bodybuilding as we know it in Europe. To us it s not a new thing but the guys from the…",
      user: "admin",
      category: "BodyBuilding",
      date: "19/12/2021",
      paragraph: "The judge should first assess the overall male athletic appearance of the physique. This assessment should begin at the head and extend downwards, taking the whole physique into account. The assessment, beginning with the general impression of the physique, should take into consideration the hair and facial features; the overall athletic development of the musculature; the presentation of a balanced, symmetrically developed physique; the condition of the skin and the skin tone; and the athlete s ability to present onstage with confidence. \n \n So now that we know what it is, we can get ready for the new part of our sport! Bodybuilding is just starting to expand and so far it s doing a pretty good job. Both Women and men have a lot of divisions to choose from making it easier for any particular body to fit in somewhere. Who knows, maybe this new Classic look will be a big hit!",
      header1: "Classic bodybuilding term"
    },
    {
      id: 6,
      image: "/assets/images/pages-images/blog-images/blog-enlarged-6.jpg",
      title: "What is L-Glutamin and benefits",
      desc: "Have you heard about the incredible health benefits of L-glutamine?  First used in powder form by people in the fitness industry who were looking to preserve muscle tissue, L-glutamine is an amino acid that is a building block of protein. L-glutamine is…",
      user: "admin",
      category: "Supplements",
      date: "20/12/2021",
      paragraph: "One of L-glutamine s main roles in the body is to support detoxification by cleansing the body from high levels of ammonia. It acts as a buffer and converts excess ammonia into other amino acids, amino sugars and urea. \n Doing approximately one hour of exercise can cause a 40 percent reduction of glutamine in the body. It can also cause suppressed immune function. This has a negative impact on your resistance training and may lead to overtraining syndrome. \n L-glutamine benefits long distance athletes as well by boosting the immune system (T-helper cells). Animal studies have indicated that this increase in T-helper cells may reduce the ‘stresses  associated with overtraining syndrome.",
      header1: "L-Glutamine Improves Energy and Athleticism"
    },
    {
      id: 7,
      image: "/assets/images/pages-images/blog-images/blog-enlarged-7.jpg",
      title: "Lee Haney – A Gentleman s Champion",
      user: "admin",
      category: "BodyBuilding",
      desc: "13 men in the world won the Mr. Olympia title since the competition started. It s an elusive trophy that was given to the very best competitors in our sport and the quickly became legends. We all know some famous stories…",
      date: "22/12/2021",
      paragraph: "13 men in the world won the Mr. Olympia title since the competition started. It s an elusive trophy that was given to the very best competitors in our sport and the quickly became legends. We all know some famous stories about Arnold, Ronnie, Dorian or Cutler, but we rarely mention Lee Haney. Well…let s change that \n Lee Haney was born in 1959. He s an IFBB professional bodybuilder with a great reputation and an amazing body. Haney is the joint record holder, along with Ronnie Coleman, for winning the most Mr. Olympia titles, with eight Sandow trophies in his house. That record is the most coveted one in whole of bodybuilding and there are those who doubt that it will ever be broken. \n One of his most famous quotes is that we should “train to stimulate, not annihilate.” That philosophy ensured his longevity and health during a long and prestigious bodybuilding career. In his time there were no instagram bodybuilder or facebook champions, if you wanted something, you had to do it with your body without any help from social networks. Sounds hard to imagine but that was the world he lived, competed and won in! \n He started competing as a teenager only to become one of the greatest bodybuilders of all time. His potential was very visible even at an early age so it became clear that Lee is going to have a fruitful career in front of him. Teen mister America was his first big title and there he was wondering could he really reach the professional heights of the iron sport. As it turned out, he reached new heights! \n Before him nobody was even close to winning 8 consecutive Mr.Olympia contests. Arnold got 6 under his belt only to return a few years later to get to 7 before hanging his trunks for good. Lee never broke his streak and after winning 7 he asked his wife if he should go after the record and get that one, last Sandow so he could be the record holder. She was adamant that he should go and so he did. At that show he was able to Eclipse the mighty Dorian Yates. \n Lee was big, but never huge or bulky. At his best he was about 250 on stage but with a wasp-like waist that ensured his reign for a long period. Big arms, full chest, massive back and detailed legs. It was all there for Haney to exploit through hard work and strong mindset. He always was a man of God and said that it helped him a lot in his sessions during the hardest years in the gym. \n So when you think about great bodybuilders always remember that Lee should probably be in your top 3. He was the first man ever to set the bar as high as it stands today, and the last Mr.Olympia with trully classical lines. A gentleman that never talked trash or held grudges against others. Marvelous poser, Lee was, and still is the pride of bodybuilding, More than just a competitor – he is a true male role model!",
      header1: "Lee Haney story and bodybuilding"
    },
    {
      id: 8,
      image: "/assets/images/pages-images/blog-images/blog-enlarged-8.jpg",
      title: "A Simple Yet Powerful Method to Motivate Yourself to Exercise Consistently",
      user: "admin",
      category: "Health & Fitness",
      desc: "Learn how to take a mental victory lap each day while shifting your mood and mental state to a better one with this simple, yet powerful, technique.",
      date: "12/01/2022",
      paragraph: "When it comes to health behaviors, motivation seems hard because we often take the path of most resistance, particularly when it comes to exercise. Too many mistakenly believe that exercise must be awful to be effective, which is often enough to stop them before they even get started. \n Yet rarely has anyone ever regretted exercising or even just going for a brisk walk. \n Here is a simple technique that you can use to capture the shift in mood and energy level that your next workout has provided for you. If you use this for a few workouts in a row you can, in effect, teach your brain to get the immediate “reward” of exercise or physical activity. \n Here s how to do it: \n Use the “Voice Memos” app on your smartphone. \n Immediately before exercising, record a very short statement describing how you feel physically, mentally and/or emotionally. \n Immediately after exercise, repeat step 2. \n Playback the recording from steps 2 and 3 right after each other. \n You will notice the effect immediately from both the words you use and the tone and energy or enthusiasm in your voice. \n A few notes: \n If you do not use a smartphone, write down the before-and-after statements on a sticky note or a calendar. This approach misses the opportunity to hear your own tone of voice, but it can still be effective. \n \n This works even if you decide to use the same words in both statements. I once had a client who was skeptical of this technique and claimed that using more positive words by itself would create the shift in tone. I told him to use “I feel sluggish” (his “before” statement) as his after statement, too. He was surprised that his tone sounded so much more energetic and positive in the “after” utterance. \n \n Take note of what effect this action has, no matter how small. Too often, people exercise because they “should” and, as a result, it strips away much of the perceived benefit from the positive behavior because the context of a chore or obligation removes much of the enjoyment around it. This technique changes that.",
      header1: "Healthy habits and lifestyle"
    }
]
  
companies = [
    {
      id: 1,
      name: "BodyBuilder Gym",
      desc: "We are very happy with AlbVitaFitness products we use them all the time and ecourage all to do it",
      image: "/assets/images/logos/company-1.png"
    },
    {
      id: 2,
      name: "LocalTirana Gym",
      desc: "We found AlbVitaFitness very accidentally but now we love it its the best all in one package for fitness be it products, services, their team is amazing, really good",
      image: "/assets/images/logos/company-2.png"
    },
    {
      id: 3,
      name: "Tirana MMA Center",
      desc: "We knew they were  the best in products section but what blew our mind was their MMA speciality too, in terms of team and classes really all in one package",
      image: "/assets/images/logos/transparent.png"
    }
]
  
services = [
    {
      id: 1,
      name: "Yoga",
      image: "/assets/images/pages-images/services-images/services-1.jpg",
      desc: "We do Crossfit"
    },
    {
      id: 2,
      name: "Fitness",
      image: "/assets/images/pages-images/services-images/services-2.jpg",
      desc: "We do Fitness"
    },
    {
      id: 3,
      name: "Crossfit",
      image: "/assets/images/pages-images/services-images/services-3.jpg",
      desc: "We do Crossfit"
    },
    {
      id: 4,
      name: "Bodybuilding",
      image: "/assets/images/pages-images/services-images/services-4.jpg",
      desc: "We do Bodybuilding"
    },
    {
      id: 5,
      name: "Martial arts",
      image: "/assets/images/pages-images/services-images/services-5.jpg",
      desc: "We do MMA"
    },
    {
      id: 6,
      name: "Cardio",
      image: "/assets/images/pages-images/services-images/services-6.jpg",
      desc: "We do Cardio"
    },
    {
      id: 7,
      name: "Resistance",
      image: "/assets/images/pages-images/services-images/services-7.jpg",
      desc: "We do Conditioning"
    }
]

coaches = [
    {
      id: 1,
      image: "/assets/images/pages-images/team-images/coach-1.jpg",
      name: "Dyah Ali Davis",
      desc: "Yoga coach",
      longDesc: "I am Dyah Ali Davis and i do yoga classes in AlbVitaFitness"
    },
    {
      id: 2,
      image: "/assets/images/pages-images/team-images/coach-2.jpg",
      name: "Everton Bittar Oliveira",
      desc: "BJJ coach",
      longDesc: "I am Everton Bittar Oliveira and i do bjj classes in AlbVitaFitness"
    },
    {
      id: 3,
      image: "/assets/images/pages-images/team-images/coach-3.jpg",
      name: "Vitelmo Katel Kubis",
      desc: "Bodybuilding coach",
      longDesc: "I am Vitelmo Katel Kubis and i do bodybuilding classes in AlbVitaFitness"
    },
    {
      id: 4,
      image: "/assets/images/pages-images/team-images/coach-4.jpg",
      name: "Marcos DaMatta",
      desc: "Conditioning coach",
      longDesc: "I am Marcos DaMatta and i do conditioning classes in AlbVitaFitness"
    },
    {
      id: 5,
      image: "/assets/images/pages-images/team-images/coach-5.jpg",
      name: "Conan Silveira",
      desc: "Crossfit coach",
      longDesc: "I am Conan Silveira and i do crossfit classes in AlbVitaFitness"
    },
    {
      id: 6,
      image: "/assets/images/pages-images/team-images/coach-6.jpg",
      name: "Steve Mocco",
      desc: "Boxing coach",
      longDesc: "I am Steve Mocco and i do boxing classes in AlbVitaFitness"
    },
    {
      id: 7,
      image: "/assets/images/pages-images/team-images/coach-7.jpg",
      name: "Thiago Alves",
      desc: "Striking coach",
      longDesc: "I am Thiago Alves and i do striking classes in AlbVitaFitness"
    }
]

favorites = [
    {
      id: 0,
      name: "randomA",
      description: "randomB",
      image: "randomC"
    }
]