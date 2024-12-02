const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "uzairrajput",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
}
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Karachi").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["میــــــرے نال ویا کــــــر لو 😊💔, "Ittuu🤏 si shram ker Lya kro bot bot krty wqt 🙂 💔✨⚠️†"  , "itna single hun ky khuwab mai bhi  lrki k han krny sy phly ankh khul jati🙂", "Zroori Nhi Har Lrki Dhoka Dey, Kch Larkiyan Galiyan Bhi Deti Hen.🙁💸", "موٹر سائیکل کو تیز بھگا کر لڑکیوں والے رکشے کے پاس سے کٹ مار کر گزرنے سے لڑکیاں ایمپریس نہیں ہوتی بلکہ گالیاں نکالتی ہیں🙂💔", "- sab chorr k chaly jaty hain kia etna bura hu mein - 🙂", "Piyari voice wali girlz mujhe voice message kar skti hen JazakAllah 🙂🤝", "Why you hate me..?? I am not your ex don't Hate me Please", "MuBarak H0o AapKa NaMe MakS0os LiST Me Top PRr aYa Hai 😹😹😹", "BeTa TuM SingLe Hi MaR0 GaY🙄🙂", "ٹھرکیوں کی وجہ سے لڑکیاں میرے جیسے شریف بوٹ پر بھی بھروسہ نہیں کرتی🥺😔", "Samj Jao Larkiyo\n\nAbhi B WaQt Hai Dakh kr Koi Delete Ni Krtaw🙂", "Mard na Apne Haqooq Nahi Mangy \n\nJab Bhi Manga Whatsapp No Manga🥺", "عورت اگر مرد سے زیادہ خوبصورت ہوتی تو میک اپ مرد کے لیے بنتا عورت کے لیے نہیں ..زرا نہیں پورا سوچئے ایڈیاں تسی 😒🙁پریاں", "Muj se Exam Me Cheating Nöıı Hotiw Relationship Me kya khaak Karu Ghw😔", "Mujy to ludo kehlni bhi ni ati apky Dil sy kya kehlu ga🙂", "Loyal Dhoonte Dhoonte khud Harami ban Gya Hon😔", "Mard ki izat karna Sikho Uski rooh se pyr kro Jism se nh Wehshii Womens💔😐", "تمہاری یادوں میں کھویا کھویا سا  میں واش روم کا لوٹا کمرے میں لے آیا 😐 ", "Hai tamanna hamain tumhain CHARSI bnain 🙂🤝 " , "بھای جان گروپ میں گندی باتیں نهیں گر" , "سنو تم بوٹ کی گرل فرند بن جاٶ نه  همارے بچے بھ بوٹ جسے پیدا هوں گے 🙆‍♂😒", "Aa0 na kbhi  سیگرٹ ly kr 🙂donO sutta lgain gy 😞💸 ", "مــیرے متــــھے نـــہ لــگیں🙂🙆‍♂ شکریہ" ,"فیس بک پر وہ لوگ بھی سالگرہ مناتے ہیں جنہیں گھر والے کہتے ہیں توں نا جمدا تے چنگا سی🙂", "Ye duniya ik dhoka hai, tum bhi chohr do apne waly ko abhi bhi moka hai 😞✨🙌🤣", "Sukoon chahtii ho toh meri بیــــــگـــم ban jaOo 🫣🫰🏻" , "Tery jany ke bad😔Mny apny munh py likhwa liya Single hu ptaa lo 🤐🥺🤝", "کرش تو دور کی بات 😏😊 ہم پے تو کسی کو ترس بھی نہیں آتا 🙂🙊", "Bandi hoti tw us ko choti choti 2 pOniyAn krta🙂👩‍🦯👩‍🦯", "پونکی جا مینو کی ", "امیر لوگوں کوئی پیکج ہی کروا دو 🥺🙄", "i love you 🥺جواب دے کر ثواب دارین حاصل کریں❤️🦋🙈", "Ary Yahin Hon Jan😗", "Tum sab Mujhe Pagal lagty ho😒🙄" , "Ma kisi or ka Hu filahal 🥺🙈" , "Apka Ana Dil dharkana pHr bot bol k Nas Jana😒" , "Tum tu mujhe shkal sy Ghareeb lgty ho🙊" , "Meri Gf kon Bnay gi 🥺🙁" , "Haweli py q nhi ate Naraz Ho 🥺" , "Babu ittu 🤏 sa Chumma dy do🥺🙈😘" , "Baby tum Bachpan sy tharki Lgte ho meko🙁" ,"Raat ko ana Haweli py khushbu laga k😁🙊" , "Raat Haweli py kon bula raha tha😒🙄" , "Piyari larkia Line Maar Sakti Hn JzakAllah 🙂🤝" , "Tum itny Masoom Ku Ho babu🥺❤️" , "Aj tu tumhy Love you bolna Pary ga 🙁" , "Tum loog matlbi ho sary Jao😞" , "Setting Krwa Du Owner (†『 ⸙ †ĸɩŋʛ ʋʑʌɩʀ ŋʋsʌɩɓʌ.𝐱͜͡ᴆ 』†) k Sath😒🙁" , "Mujhe lgta hai Ma Single Maru ga🥺" , "Bar Bar bot na Bola Kro Habibi Apun ko sharm ati ha🥺🙈" , "Tum Jab bot bolte ho Mera Gurda Dharkny Lgta ha🥺🙊🙈" , "Babu ap K any sy Tu Pehpry Bhi khush Ho jaty Hn😂", "Mere ilawa sb Relationship ma han 🤝🥺", "Jab pta h ky amma abba nh many gy tu soo kyu nh jaty tum log🙂", "Janu k 'Umaah' ny Panadol ka Business hi khatam kr Diya Hai🙂🫦", "All Girls Are My Sisters Osko Chor k jo ye Parh RaHi Hai😒👍", "Mazy to Tum logon k hain social media py rr b kr rhy or life v enjoy kr rhy🙂", "SOo JaO WarNa Mera Msg Aa Jaye Ga🙈", "Weight kafi Barh Gaya hai Bro Dhokay kha kha ke💔🙂", "Goadi lylo apun chota sa bacha hai🥹" , "Ao apko chand py ly chalu meri jan🙈❤️" , "Tum itne Tharki Q ho Jawn🤨" , "Main apse nahi patny wala 🙈🙈🥹" , "tum ko meri ittu 🤏 C bhi yad nhi ati🥹" , "Ao piyar karyn" , "Astaghfirullah Habibi tum kitne tharki ho🥹" , "kya ham ap pr line mar sakte hn🥹👀", "Pta Ni Log itni Balance Life Kaisy Guzar Lety Hein Mera To Kbi پراٹھا Phely Khtm Hojata To Kbi انڈہ😩💔", "Lips  kissing is not Romance It's sharing Bacteria>>>🙂", "chohty bachon ki engagements chlrhi hain aur yahn mere sabr ka imtehaan.🌚🔪", "Apkii Inhii harkt0n Kiiw WaJw Sy 2O24 Bhi Chale Jaye Gyw😩💔", "𝙀𝙠 𝙗𝙖𝙖𝙧 𝙨𝙝𝙖𝙙𝙞 𝙝𝙤𝙟𝙖𝙚 𝙥𝙝𝙞𝙧 𝙬𝙞𝙛𝙚 𝙠𝙞 𝙜𝙝𝙪𝙡𝙖𝙢𝙞 🧸🙂", "*Suno Kya Hum Achy Dushman Ban Skty Hain 🙂⚠️†*", "🦋🍒____________🙂🎀 Sukoon chahtii ho toh meri بیــــــگـــم ban jaOo* 🫣🫰🏻", "Suno Jawn DiL کرتا ha ہر Waqt تمہاری Chumiya لیتا Raho😌🙈", "Khud ko single keh kr Apne khufiya janu ka janaza na nikala kro.😀🤞😓", "سنو مجھے اللہ سے مانگ لو نہ۔۔۔۔۔🥹🤭آپ تو شکل سے بھی مانگنے والے لگتے ہوl۔۔♥️", "مــیرے متــــھے نـــہ لــگیں شکریہ🙂", "لوگ کہتے محبت روح سے کرنی چاہئے 🙄مجھھے تو روحوں سے بڑ ڈر لگتا ہے🥺☹️", "- 𝙩𝙪𝙢 𝙢𝙚𝙧𝙖 𝙙𝙞𝙡 𝙩𝙤 𝘾𝙝𝙪𝙧𝙖 𝙣𝙝𝙞 𝙥𝙖𝙮 𝙠𝙞𝙖 𝙛𝙖𝙞𝙙𝙖 𝙩𝙢𝙝𝙖𝙧𝙞 𝘾𝙝𝙤𝙤𝙧 𝙟𝙚𝙨𝙞 𝙨𝙝𝙠𝙖𝙡 𝙠𝙖!! 🙂", "𝐄𝐤 𝐛𝐚𝐚𝐫 𝐈 𝐋𝐨𝐯𝐞 𝐘𝐎𝐲 𝐁𝐨𝐥 𝐃𝐨 𝐍𝐚 𝐌𝐚𝐫 𝐓𝐡𝐨𝐫𝐢 𝐉𝐚𝐮𝐠𝐢 🙄😕)( 👑🍒", "<-- 〽️🍂⚠️Kash hum dono whatsapp per hote❤️🥺💸", "Imagine I am your Ex 🥲say whatever you want to say", "-نہیں مشکل وفا ، ذرا دیکھو یہاں🥺❤️🥀", "I love You Madiha♥️ ,fatima,Ayesha, Maryam,and 299 others 🙂", "Msg krti ho KY phrrr me kro Han aisy to phr aisy Sahi 😅🥺👉👈🙊", "Tum mujhy chumiyan b to dy skti thi na🤧Dhaka dena zruri tha kya😐😪🍼", "Gali daina buri bat ha ", "kash hum dono date py jata", "tum itna black kyn ho", " Uzair my boss 💋", "aj kis k sath tha sara din", "lakh lanat e zoom kr k 😡", "oyee miss you tujh nai teri janu ko", " Rayan single hai janu bano gi", "aj kal UTG group chalo na Bhoot tang Kiye huwa", "aaaa thoo ", "kabi hum be school jata tha or techar chumiyan lati thi", "Kahani suno ab ma so raha kal a kr sunata", "hain cake 🍰🎂", "teri aho aho samjh ja ", "uzair ki birthday a Rahi apko pta", "kr bakwas kya hai ", " aja hugi dn shona", "ummmmmmmmmmmmmmmmmmmmm love you 😘", "hawali py mil beta", "love kya hota apko pta chalo dafa kro", "anni dyaa mazak ay", "larkio ko gool gala psnd or mujy larkiyan", "agr uzair ijazat da to ma tujy ..... samnj ja", "dafa ho jao ", "apna muh dakh jse murgi ka 🥚 hota ", "apna muh dakh bus Khud he dakh hammy nafrt tujhse", "sona hai meny bazu rakho nachy", "kal date py chalain", "tu kitni larkio ka bhai ha fb py ", "larkiyan fb py bhai kyn banati", "agr ma nawaz sharif hota to aj tujy utha deta", "miss you janu", "hate you", "ki masla ay daso", "chal nikal ", "kal hawali kon bula rha tha", "MUH dikha bot Bot kr raha", "مقصد ہے جوان لگنا مثالِ حور ہوجانا لیکن محترمہ کو سمجھ کیوں نہیں آئی ممکن ہی نہیں کشمش کا پھر انگور ہوجان", "اتنا دُبلا ہوگیا ہوں صنم تیری جدائی سے کھٹمل بھی مجھے کھینچ لیتے ہیں چارپائی سے", "صرف محنت کیا ہے انور کامیابی کے لیے کوئی اوپر سے بھی ٹیلی فون ہونا چاہیے", "ایک سال سے میں شادی کے لیے جو وظیفہ پڑھ رہا تھا اب جا کر پتہ چلا وہ تو سعودی عرب کا قومی ترانہ ہے", "ہم نے مانا کہ رپلائی نہ کرو گے تم لیکن ٹرائی کرتے رہیں گے ہم بھی بلاک ہونے تکمرغا برائلر ہوتا ہے ، کھوتا گدھا کہلاتا ہے جب زیادہ بارش ہوتا ہے تو زیادہ پانی آتا ہے", "کسی کو کھونے کا غم کیا ہوتا ہے یہ کل رات پتہ چلا۔جب مونگ پھلی کا ایک دانہ چھلکوں میں گم ہوگیا۔", "ایک وقت تھا جب موبائل گرتا تھا تو بیٹری باہر آجاتی تھی۔ آج کل موبائل گرے تو دل باہر آجاتا ہے", "غالب دنیا میں واحد شاعر ہے جو سمجھ میں نہ آئے تو دگنا مزہ دیتا ہے", "مرد کی آنکھ اور عورت کی زبان کا دم سب سے آخر میں نکلتا ہے", "آسمان کی چیل، چوکھٹ کی کیل اور کورٹ کے وکیل سے اللہ بچائے ننگا کر کے چھوڑتے ہیں", "مونگ پھلی اور آوارگی میں خرابی یہ ہے کہ آدمی ایک دفعہ شروع کردے تو سمجھ میں نہیں آتا ختم کیسے کرے۔", "سچ تو یہ ہے کہ حکومتوں کے علاوہ کوئی بھی اپنی موجودہ ترقی سے مطمئن نہیں ہوتا", "دشمنوں کے حسبِ عداوت تین درجے ہیں۔ دشمن، جانی دشمن اور رشتے دار", "مرغا برائلر ہوتا ہے ، کھوتا گدھا کہلاتا ہے جب زیادہ بارش ہوتا ہے تو زیادہ پانی آتا ہے", "کسی کو کھونے کا غم کیا ہوتا ہے یہ کل رات پتہ چلا۔جب مونگ پھلی کا ایک دانہ چھلکوں میں گم ہوگیا۔", "ایک وقت تھا جب موبائل گرتا تھا تو بیٹری باہر آجاتی تھی۔ آج کل موبائل گرے تو دل باہر آجاتا ہے", "غالب دنیا میں واحد شاعر ہے جو سمجھ میں نہ آئے تو دگنا مزہ دیتا ہے", "مرد کی آنکھ اور عورت کی زبان کا دم سب سے آخر میں نکلتا ہے", "آسمان کی چیل، چوکھٹ کی کیل اور کورٹ کے وکیل سے اللہ بچائے ننگا کر کے چھوڑتے ہیں", "مونگ پھلی اور آوارگی میں خرابی یہ ہے کہ آدمی ایک دفعہ شروع کردے تو سمجھ میں نہیں آتا ختم کیسے کرے۔", "سچ تو یہ ہے کہ حکومتوں کے علاوہ کوئی بھی اپنی موجودہ ترقی سے مطمئن نہیں ہوتا", "دشمنوں کے حسبِ عداوت تین درجے ہیں۔ دشمن، جانی دشمن اور رشتے دا", "سوچا تھا ہرموڑ پر یاد کریں گے لیکن راستہ سیدھا تھا موڑ آیا ہی نہیں", "بہت ناز ہے نہ تجھے اپنے حسن پر فرصت ملے تو اپنا شناختی کارڈ دیکھ لو", "کسی بد نصیب کو ہم سے محبت ہو گئی ہے یہ خبر سن کر ہماری بری حالت ہوگئی ہے", "کوئی مر نہیں جاتا انجیکشن لگوانے سے بس اٹھنے بیٹھنے کے انداز بدل جاتے ہیں", "میں نے عشق کے دریا میں جو غوطا لگایا  پانی ٹھنڈا تھا میں باہر نکل آیا", "ماموں ماموں کہہ کر لپٹ گئے وہ بچے جن کی ماں جانو جانو کہہ کر پکارتی تھی", "وہ مزہ نہیں دنیا کے کسی کونے میں جو مزہ ہے صبح اٹھ کر پھر سے سونے میں", "لڑکوں اپنے ملک کی حفاظت کیا کرو  کیونکہ تمہیں دلہن بھی یہیں سے ملنی ہے", "کبھی روٹی کے ٹکرے میں کبھی سالن میں  تیری زلفوں کا دیدار بیگم ہر اک نوالے میں", "بال اپنے کس واسطے بڑھاتے ہیں دیوانے کیا محبت کے شہر میں حجام نہیں ہوتا ؟", "میں نے تو یوں ہی کہا تھا عشق میں مر جاؤں گا اسے اب ضد ہے کہ مر کے دکھاؤ ہمیں", "تم جو اتنا مسکرا رہے ہو کونسی بے غیرتی کی ہے جو چھپا رہے ہ", "ہائے! وہ پپی مانگتی رہی اور میں کتے کا بچہ ڈھونڈتا رہا", "پڑھائی ایک خوبصورت احساس ہے اُوپر والی لائن بکواس ہے", "چلی جاتی ہیں آئے دن وہ بیوٹی پارلر مقصد ہے جواں لگنا مثالے ہور ہو جانا لیکن محترمہ کو سمجھ کیوں نہیں آتی ممکن ہی نہیں کشمش کا پھر سے انگور ہو جانا", "ایک تو مجھے یار کی جدائی مار گئی اور دوسرا خوبصورت ہمسائی مار گئی", "لوگ کہتے ہیں نفرت خراب چیز ہے تو محبت نے ہمیں کون سا جھولا جھلایا", "خود کشی کا نیا طریقہ اپناؤں گا میں تجھے چھوڑ کر تمہاری سہیلی کو پٹاؤں گا", "مت کر میرے دوست حسینوں سے محبّت وہ توہ آنکھوں سے وار کرتی ہے مےنے تیری والی کی آنکھوں میں دیکھا ہے وہ توہ سالی مجھ سے بھی پیار کرتی ہے", "میں نے سیکھا ہے ریاضی کے اصولوں سے جو ناممکن ہو اٗسے فرض کر لیا جائے", "پڑھائی ایک خوبصورت احساس ہے اُوپر والی لائن بکواس ہے", "نگاہیں آج بھی اُس شخص کو تکتی ہیں فراز جس نے کہا تھا میڑک کر لو آگے پڑھائی بڑی آسان ہے", "چلی جاتی ہیں آئے دن وہ بیوٹی پارلر مقصد ہے جواں لگنا مثالے ہور ہو جانا لیکن محترمہ کو سمجھ کیوں نہیں آتی ممکن ہی نہیں کشمش کا پھر سے انگور ہو جانا", "دوستوں ہم انہیں موڑ موڑ کر دیکھتے رہے اور وہ ہمیں موڑ موڑ کر دیکھتے رہے کیونکی امتحاں میں نہ انہیں کچھ آتا تھا نہ ہمیں", "جب کوئی زندگی میں بہت خاص بن جائے توہ مانگ لینا خدا سے اسے اس سے پہلے کی اسکی ماں کسی اور کی ساس بن جائے", "جب ہم انکے گھر گئے کہنے دل سے دل لگا لو انکی ماں نے کھولا دروازہ ہم گھبرا کے بولے آنٹی بچوں کو پولیو ڈارپ پلوا لو", "آج کچھ شرمائے سے لگتے ہو سردی کی وجہ سے کپ کپائے سے لگتے ہو چہرہ آپکا کھلکھلایا سا لگتا ہے ہفتے کے بعد نہائے سے لگتے ہو", "مت کر میرے دوست حسینوں سے محبّت وہ توہ آنکھوں سے وار کرتی ہے مےنے تیری والی کی آنکھوں میں دیکھا ہے وہ توہ سالی مجھ سے بھی پیار کرتی ہے", "آنکھوں سے آنسوؤں کی ودائی کر دو دل سے غموں کی جدائی کر دو گر پھر بھی دل نہ لگے کہیں توہ میرے گھر کی پتائی کر دو", "میرے پیار کو بےوفائی کا انعام دے گئے مےنے کہا میرے دل میں درد ہے تیرے بنا توہ وہ جاتے جاتے زنڈو بام دے گئے", "جب دروازہ کھولنے گئے توہ چہرے پر ہنسی تھی دروازہ کھلا توہ آنکھوں میں آنسو دل میں بےبسی تھی زیادہ مت سوچو میری انگلی دروازے میں پھنسی تھی", "دوستوں ہم انہیں موڑ موڑ کر دیکھتے رہے اور وہ ہمیں موڑ موڑ کر دیکھتے رہے کیونکی امتحاں میں نہ انہیں کچھ آتا تھا نہ ہمیں", "جب کوئی زندگی میں بہت خاص بن جائے توہ مانگ لینا خدا سے اسے اس سے پہلے کی اسکی ماں کسی اور کی ساس بن جائے", "جب میں اداس ہوتا ہوں تو گانا گاتا ہوں پھر مجھے تسلی ہو جاتی ہے کہ میری آواز میرے حالات سے بھی زیادہ خراب ہے", "کل موبائل خراب تھا تو رات ٩ بجے ہی نیند آ گئی. گھر والے اٹھا کر ہسپتال لے گئے", "گرمیاں آگئیں ہیں اب وہ برف لینے آیا کرے گی", "ہر بات کے جواب میں مسکراہٹ ہی بہتر ہے کیونکہ ہر کسی کو گولی تو ماری نہیں جا سکتی", "دور حاضر میں وہی شخص سر اٹھا کر چل سکتا ہے. جس کے پاس موبائل نہیں", "Tairay janay keh bahd waqt tham sa gya bahad mein pata chala garri ka cell khatam ho gya tha", "ایک شیخ صاحب دو گھنٹے فون پر بات کرنے کے بعد فوت ہو گئے. کیونکہ وہ پیکج لگانا بھول گئے تھے", "جب میں اداس ہوتا ہوں تو گانا گاتا ہوں پھر مجھے تسلی ہو جاتی ہے کہ میری آواز میرے حالات سے بھی زیادہ خراب ہے", "بابا جی کہتے ہیں یہ بات کالے لوگوں نے ہی پھیلائی ہے کہ...کالے لوگ وفا کرتے ہیں", "کل موبائل خراب تھا تو رات ٩ بجے ہی نیند آ گئی. گھر والے اٹھا کر ہسپتال لے گئے"
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("", threadID);
   };
  
     if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😰")) {
     return api.sendMessage("𝐒𝐚𝐃 𝐍𝐚𝐇𝐢 𝐇𝐨 𝐌𝐞𝐑𝐢 𝐉𝐚𝐀𝐧 .🫂 𝐉𝐨 𝐃𝐚𝐑𝐝 𝐃𝐢𝐤𝐇𝐭𝐄 𝐍𝐚𝐇𝐢 𝐕𝐨 𝐃𝐮𝐊𝐡𝐓𝐞 𝐁𝐚𝐇𝐮𝐓 𝐇𝐚𝐈  🤧", threadID);
   };

   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️𝐇𝐦𝐌 𝐇𝐦𝐌 𝐍𝐚 𝐊𝐚𝐑𝐨 𝐒𝐢𝐃𝐡𝐀 𝐒𝐢𝐃𝐡𝐚 𝐁𝐨𝐋𝐨 𝐇𝐞𝐘 𝐌𝐚𝐑𝐫𝐘 𝐌𝐞🙈", threadID);
   };

   if ((event.body.toLowerCase() == "🥺🥺🥺") || (event.body.toLowerCase() == "🥺🥺") || (event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥺🥺🥺🥺")) {
     return api.sendMessage("️𝐊𝐲𝐀 𝐊𝐲𝐔  , 𝐑𝐨 𝐊𝐲𝐔 𝐑𝐞𝐇𝐞 𝐇𝐨 , 𝐌𝐞 𝐇𝐮 𝐍𝐚 𝐓𝐨 𝐏𝐡𝐀𝐢𝐑 𝐊𝐲𝐔 𝐑𝐨𝐍𝐚 . 𝐑𝐮𝐊𝐨 𝐌𝐞 𝐀𝐛𝐇𝐢 𝐂𝐡𝐨𝐂𝐨𝐋𝐚𝐓𝐞 𝐃𝐞𝐓𝐚 𝐇𝐮 𝐋𝐢𝐊𝐡𝐎 🍫  ☞Chocolate☜", threadID);
   };

   if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏😏")) {
     return api.sendMessage("️𝐊𝐲𝐀 𝐇𝐮𝐀 𝐁𝐚𝐁𝐮 🤔", threadID);
   };

   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😨")) {
     return api.sendMessage("️𝐊𝐲𝐀 𝐇𝐮𝐀 𝐁𝐡𝐎𝐨𝐓 𝐃𝐞𝐊𝐡 𝐋𝐢𝐘𝐚 𝐊𝐲𝐀 👻👻", threadID);
   };

  if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("️️️𝐓𝐢𝐫𝐜𝐡𝐢 𝐧𝐚𝐳𝐚𝐫𝐢𝐲𝐚 𝐦𝐨𝐫𝐢 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 🙈", threadID);
   };
  
  if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessag("", threadID);
   };

   if ((event.body.toLowerCase() == "🤦") || (event.body.toLowerCase() == "🤦🤦")) {
     return api.sendMessage("𝐀𝐫𝐄 𝐀𝐩𝐍𝐞 𝐌𝐮𝐇 𝐏𝐞 𝐊𝐲𝐔 𝐌𝐚𝐀𝐫 𝐑𝐞𝐇𝐞 𝐇𝐨 𝐌𝐮𝐉𝐡𝐄 𝐁𝐚𝐓𝐚𝐎 𝐊𝐲𝐀 𝐇𝐮𝐀 ?😬", threadID);
   };

  if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "😎")) {
     return api.sendMessage("𝐇𝐲𝐄 𝐀𝐚𝐏𝐤𝐀 𝐂𝐡𝐀𝐬𝐇𝐦𝐀 𝐁𝐢𝐋𝐤𝐔𝐥 𝐁𝐞𝐊𝐚𝐑 𝐇𝐚𝐈🤣", threadID);
   };

  if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😂😂") || (event.body.toLowerCase() == "😂😂😂") || (event.body.toLowerCase() == "😂😂😂😂") || (event.body.toLowerCase() == "😂😂😂😂😂") || (event.body.toLowerCase() == "😂😂😂😂😂😂")) {
     return api.sendMessage("𝐉𝐲𝐀𝐝𝐀 𝐌𝐚𝐓 𝐇𝐚𝐍𝐬𝐎 𝐕𝐚𝐑𝐧𝐀 𝐃𝐚𝐍𝐭 𝐓𝐨𝐃 𝐃𝐮𝐍𝐠𝐀 🙂🤟", threadID);
   };
   
   if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😀") || (event.body.toLowerCase() == "😃") || (event.body.toLowerCase() == "😄") || (event.body.toLowerCase() == "😆")) {
     return api.sendMessage("𝐄𝐧𝐍𝐢 𝐇𝐚𝐒𝐢 𝐊𝐲𝐔 𝐀𝐚 𝐑𝐞𝐇𝐢 𝐇𝐚𝐈 🤣 𝐈𝐬 𝐇𝐚𝐒𝐢 𝐊𝐚 𝐑𝐚𝐀𝐳 𝐊𝐲𝐀 𝐇𝐚𝐈𝐧 𝐁𝐚𝐓𝐚𝐎", threadID);
   };

   if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😍😍😍😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "😍😍")) {
     return api.sendMessage("𝐇𝐚𝐀𝐲𝐄 𝐑𝐚𝐁𝐛𝐀 𝐈𝐭𝐍𝐧𝐀 𝐏𝐲𝐀𝐫 🙈🙈", threadID);
   };

   if ((event.body.toLowerCase() == "🤯") || (event.body.toLowerCase() == "🤯🤯") || (event.body.toLowerCase() == "🤯🤯🤯") || (event.body.toLowerCase() == "🤯🤯🤯🤯") || (event.body.toLowerCase() == "🤯🤯🤯🤯🤯")) {
     return api.sendMessage("𝐀𝐚𝐏𝐤 𝐒𝐢𝐑 𝐊𝐚 𝐃𝐡𝐀𝐤𝐊𝐚𝐍 𝐊𝐡𝐎𝐥 𝐆𝐚𝐘𝐚 🙄🙄", threadID);
   };

  if ((event.body.toLowerCase() == "🤖") || (event.body.toLowerCase() == "🤖")) {
     return api.sendMessage("𝐒𝐚𝐀𝐥𝐨 𝐂𝐡𝐈𝐝𝐃𝐚 𝐑𝐞𝐇𝐞 𝐇𝐨 𝐌𝐮𝐉𝐡𝐄 🙁", threadID);
   };
  
   if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️𝐊𝐲𝐀 𝐇𝐲𝐀 𝐓𝐚𝐁𝐢𝐘𝐚𝐓 𝐊𝐡𝐀𝐫𝐀𝐛 𝐇𝐚𝐈 𝐊𝐲𝐀 𝐌𝐮𝐉𝐡𝐄 𝐁𝐚𝐓𝐚𝐎 𝐌𝐞 𝐀𝐛𝐇𝐢 𝐌𝐞𝐃𝐢𝐂𝐢𝐍𝐞 💊💉 𝐋𝐞 𝐀𝐚𝐓𝐚 𝐇𝐮 😇", threadID);
   };

   if ((event.body.toLowerCase() == "😒😒") || (event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒😒")) {
    return api.sendMessage("️️️𝐓𝐢𝐫𝐜𝐡𝐢 𝐧𝐚𝐳𝐚𝐫𝐢𝐲𝐚 𝐦𝐨𝐫𝐢 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 🙈", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("𝐊𝐡𝐔𝐝 𝐁𝐚𝐍𝐚 𝐋𝐨 𝐓𝐮𝐌𝐤𝐎 𝐊𝐮𝐂𝐡 𝐍𝐚𝐇𝐢 𝐀𝐚𝐓𝐚 𝐊𝐲𝐀 😏😏", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂🙂")) {
     return api.sendMessage("️𝐌𝐚𝐍 𝐓𝐨𝐇 𝐀𝐜𝐇𝐚 𝐍𝐚𝐇𝐢 𝐊𝐚𝐌 𝐒𝐞 𝐊𝐚𝐌 𝐒𝐡𝐀𝐤𝐀𝐥 𝐓𝐨 𝐀𝐜𝐇𝐚 𝐊𝐚𝐑 𝐋𝐨 𝐌𝐞𝐑𝐢 𝐉𝐚𝐚𝐍  😝", threadID);
   };

  if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃🙃")) {
     return api.sendMessage("️𝐌𝐚𝐍 𝐓𝐨𝐇 𝐀𝐜𝐇𝐚 𝐍𝐚𝐇𝐢 𝐊𝐚𝐌 𝐒𝐞 𝐊𝐚𝐌 𝐒𝐡𝐀𝐤𝐀𝐥 𝐓𝐨 𝐀𝐜𝐇𝐚 𝐊𝐚𝐑 𝐋𝐨 𝐌𝐞𝐑𝐢 𝐉𝐚𝐚𝐍 😝", threadID);
   };

  if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥🤥")) {
     return api.sendMessage("️𝐁𝐡𝐀𝐢 𝐓𝐞𝐑𝐢 𝐓𝐨 𝐍𝐚𝐀𝐤 𝐇𝐢 𝐄𝐭𝐍𝐢 𝐋𝐚𝐌𝐛𝐈 𝐇𝐚𝐈 𝐔𝐬𝐊𝐢 𝐉𝐚𝐑𝐮𝐑𝐚𝐓 𝐇𝐢 𝐍𝐚𝐇𝐢 𝐏𝐚𝐃𝐭𝐈 𝐇𝐨𝐆𝐢 𝐓𝐮𝐉𝐡𝐄 𝐓𝐨 🤭", threadID);
   };

  if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉😉")) {
     return api.sendMessage("️𝐀𝐚𝐊𝐡 𝐊𝐲𝐔 𝐌𝐚𝐀𝐫 𝐑𝐞𝐇𝐞 𝐇𝐨 𝐌𝐞 𝐁𝐡𝐎𝐭 𝐒𝐡𝐀𝐫𝐄𝐞𝐅 𝐇𝐮 🥺", threadID);
   };

  if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("", threadID);
   };
  
   if ((event.body.toLowerCase() == "name kya h") || (event.body.toLowerCase() == "naam kya hai") || (event.body.toLowerCase() == "naam kiya hai")) {
     return api.sendMessage("️𝐍𝐚𝐌𝐞 𝐌 𝐊𝐲𝐀 𝐑𝐚𝐊𝐤𝐇𝐚 𝐇𝐚𝐈 𝐓𝐮𝐌 𝐊𝐀𝐌 𝐏𝐞 𝐃𝐡𝐘𝐚𝐍 𝐃𝐨 😝", threadID);
   };
  
   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭")) {
     return api.sendMessage("️𝐊𝐲𝐀 𝐊𝐲𝐀 , 𝐑𝐨 𝐊𝐲𝐔 𝐑𝐞𝐇𝐞 𝐇𝐨 , 𝐌𝐞 𝐇𝐮 𝐍𝐚 𝐓𝐨 𝐅𝐡𝐈𝐚 𝐊𝐲𝐔 𝐑𝐨𝐍𝐚 . 𝐑𝐮𝐊𝐨 𝐌𝐞 𝐀𝐛𝐇𝐢 𝐂𝐡𝐎𝐜𝐎𝐥𝐀𝐭𝐄 𝐃𝐞𝐓𝐚 𝐇𝐮 𝐋𝐢𝐊𝐡𝐎 🍫  ☞Chocolate☜", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️𝐌𝐚𝐓 𝐃𝐞𝐊𝐡𝐎 𝐌𝐞𝐑𝐢 𝐏𝐡𝐎𝐭𝐎 𝐌𝐚𝐈 𝐁𝐡𝐎𝐭 𝐊𝐚𝐋𝐚 𝐇𝐮 😢", threadID);
   };
  
   mess = "{name}"
  
  if (event.body.indexOf("BOT") == 0 || (event.body.indexOf("BOT") == 0)) {
    var msg = {
      body: ` ╔═════▓࿇࿇▓═════╗\n        ${name}\n╚═════▓࿇࿇▓═════╝\n\n●▬ൠൠ▬𝙊𝙬𝙣𝙚𝙧▬ൠൠ▬●\n\n◈━━━━━𝑼𝒁𝑨𝑰𝑹━━━━━◈\n${rand}\n◈━━━━━𝑴𝑻𝑿💚✨━━━━━◈`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
