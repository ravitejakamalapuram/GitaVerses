// Bhagavad Gita Local Verses Database
// Consists of 25 curated, profound shlokas with detailed translations and commentaries.

const GITA_VERSES = [
  {
    chapter: 2,
    verse: 47,
    theme: "Duty & Detachment",
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    transliteration: "karmaṇy-evādhikāras te mā phaleṣu kadācana\nmā karma-phala-hetur bhūr mā te saṅgo ’stv akarmaṇi",
    wordMeanings: "karmaṇi—in your prescribed duty; eva—only; adhikāraḥ—right; te—your; mā—never; phaleṣu—in the fruits; kadācana—at any time; mā—never; karma-phala—fruit of action; hetuḥ—cause; bhūḥ—be; mā—never; te—your; saṅgaḥ—attachment; astu—let there be; akarmaṇi—in inaction.",
    translation: {
      en: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty.",
      hi: "कर्म करने में ही तुम्हारा अधिकार है, उसके फलों में कभी नहीं। तुम कर्मों के फल के हेतु मत बनो और तुम्हारी अकर्मण्यता (काम न करने) में भी आसक्ति न हो।"
    },
    commentary: {
      en: "This is one of the most famous verses in the Bhagavad Gita, outlining the core philosophy of Nishkama Karma (selfless action). Sri Krishna teaches that we should focus entirely on the process of doing our duty with dedication, without obsessing over the outcome. Attachment to rewards leads to anxiety, disappointment, and greed, whereas focusing purely on the action brings peace and excellence.",
      hi: "यह भगवद्गीता के सबसे प्रसिद्ध श्लोकों में से एक है, जो निष्काम कर्म (बिना किसी स्वार्थ के कर्म) के मूल दर्शन को दर्शाता है। श्री कृष्ण सिखाते हैं कि हमें परिणाम की चिंता किए बिना, पूरे समर्पण के साथ अपने कर्तव्य को करने पर ध्यान केंद्रित करना चाहिए। फलों से आसक्ति चिंता, निराशा और लालच की ओर ले जाती है, जबकि शुद्ध भाव से किया गया कर्म शांति और श्रेष्ठता लाता है।"
    }
  },
  {
    chapter: 6,
    verse: 5,
    theme: "Self-Elevation",
    sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
    transliteration: "uddhared ātmanātmānaṁ nātmānam avasādayet\nātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ",
    wordMeanings: "uddharet—one must elevate; ātmanā—by the mind; ātmānam—the self; na—never; ātmānam—the self; avasādayet—degrade; ātmā—the self; eva—certainly; hi—indeed; ātmanaḥ—of the self; bandhuḥ—friend; ātmā—the self; eva—certainly; ripuḥ—enemy; ātmanaḥ—of the self.",
    translation: {
      en: "Elevate yourself through your own mind, and do not degrade yourself. For the mind is the friend of the self, and the mind is the enemy of the self.",
      hi: "मनुष्य को अपने मन के द्वारा अपने आप को ऊपर उठाना चाहिए, खुद को नीचे नहीं गिराना चाहिए। क्योंकि यह मन ही आत्मा का मित्र है, और मन ही आत्मा का शत्रु है।"
    },
    commentary: {
      en: "Sri Krishna explains that our internal state governs our lives. The mind has the power to lift us to spiritual heights or pull us down to degradation. We must take personal responsibility for our growth and not blame external circumstances. Self-mastery begins with training the mind to behave as our helper rather than our adversary.",
      hi: "श्री कृष्ण समझाते हैं कि हमारी आंतरिक स्थिति हमारे जीवन को नियंत्रित करती है। मन में हमें आध्यात्मिक ऊंचाइयों पर ले जाने या पतन की ओर खींचने की शक्ति होती है। हमें अपने विकास की व्यक्तिगत जिम्मेदारी लेनी चाहिए, न कि बाहरी परिस्थितियों को दोष देना चाहिए। आत्म-नियंत्रण मन को शत्रु के बजाय मित्र बनाने से शुरू होता है।"
    }
  },
  {
    chapter: 6,
    verse: 6,
    theme: "The Mind",
    sanskrit: "बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जितः।\nअनात्मनस्तु शत्रुत्वे वर्तेतात्मैव शत्रुवत्॥",
    transliteration: "bandhur ātmātmanas tasya yenātmaivātmanā jitaḥ\nanātmanas tu śatrutve vartetātmaiva śatru-vat",
    wordMeanings: "bandhuḥ—friend; ātmā—the mind; ātmanaḥ—of the living entity; tasya—of him; yena—by whom; ātmā—the mind; eva—certainly; ātmanā—by the living entity; jitaḥ—conquered; anātmanaḥ—of one who has failed to conquer the mind; tu—but; śatrutve—in enmity; varteta—remains; ātmā eva—the mind itself; śatru-vat—like an enemy.",
    translation: {
      en: "For him who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, his very mind will be the greatest enemy.",
      hi: "जिसने अपने मन पर विजय प्राप्त कर ली है, उसके लिए मन ही सबसे अच्छा मित्र है; लेकिन जो ऐसा करने में असफल रहा है, उसका मन ही उसका सबसे बड़ा शत्रु बनकर रहेगा।"
    },
    commentary: {
      en: "Building on the previous verse, this shloka clarifies that a disciplined and controlled mind acts as a supportive friend, guiding us toward clarity and peace. Conversely, an uncontrolled, wild mind filled with desires, anger, and distractions becomes a destructive inner enemy that actively works against our own well-being.",
      hi: "पिछले श्लोक को आगे बढ़ाते हुए, यह श्लोक स्पष्ट करता है कि एक अनुशासित और नियंत्रित मन एक सहायक मित्र के रूप में कार्य करता है, जो हमें स्पष्टता और शांति की ओर ले जाता है। इसके विपरीत, वासनाओं, क्रोध और विकर्षणों से भरा एक अनियंत्रित मन एक विनाशकारी आंतरिक शत्रु बन जाता है जो सक्रिय रूप से हमारी भलाई के खिलाफ काम करता है।"
    }
  },
  {
    chapter: 18,
    verse: 66,
    theme: "Surrender",
    sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वा सर्वपापेभ्यो मोक्षयिष्यामी मा शुचः॥",
    transliteration: "sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja\nahaṁ tvā sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ",
    wordMeanings: "sarva-dharmān—all varieties of religion/duties; parityajya—abandoning; mām—unto Me; ekam—only; śaraṇam—surrender; vraja—go; aham—I; tvā—you; sarva—all; pāpebhyaḥ—from sinful reactions; mokṣayiṣyāmi—will deliver; mā—do not; śucaḥ—worry/grieve.",
    translation: {
      en: "Abandon all varieties of duties and just surrender unto Me alone. I shall deliver you from all sinful reactions. Do not fear.",
      hi: "सभी प्रकार के धर्मों और कर्तव्यों को छोड़कर केवल मेरी शरण में आ जाओ। मैं तुम्हें सभी पापों से मुक्त कर दूंगा। डरो मत।"
    },
    commentary: {
      en: "This is the ultimate teaching of the Bhagavad Gita. Sri Krishna asks Arjuna (and humanity) to let go of the anxiety of managing complex moral obligations and instead anchor his consciousness in the Divine. True surrender is not laziness; it is performing actions with the absolute trust that the supreme intelligence governs all and protects the seeker.",
      hi: "यह भगवद्गीता की चरम शिक्षा है। श्री कृष्ण अर्जुन (और मानवता) से जटिल नैतिक कर्तव्यों के प्रबंधन की चिंता को छोड़कर अपनी चेतना को परमात्मा में केंद्रित करने के लिए कहते हैं। सच्चा समर्पण आलस्य नहीं है; यह इस पूर्ण विश्वास के साथ कर्म करना है कि सर्वोच्च चेतना सब कुछ संचालित करती है और साधक की रक्षा करती है।"
    }
  },
  {
    chapter: 2,
    verse: 20,
    theme: "Immortality",
    sanskrit: "न जायते म्रियते वा कदाचि-न्नायं भूत्वा भविता वा न भूयः।\nअजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे॥",
    transliteration: "na jāyate mriyate vā kadācin nāyaṁ bhūtvā bhavitā vā na bhūyaḥ\najo nityaḥ śāśvato ’yaṁ purāṇo na hanyate hanyamāne śarīre",
    wordMeanings: "na—never; jāyate—is born; mriyate—dies; vā—or; kadācit—at any time; na—not; ayam—this; bhūtvā—having come to be; bhavitā—will come to be; vā—or; na—not; bhūyaḥ—again; ajaḥ—unborn; nityaḥ—eternal; śāśvataḥ—permanent; ayam—this; purāṇaḥ—ancient; na—not; hanyate—is killed; hanyamāne—being killed; śarīre—the body.",
    translation: {
      en: "The soul is neither born, nor does it ever die; nor having once existed, does it ever cease to be. The soul is unborn, eternal, immortal, and ageless. It is not destroyed when the body is destroyed.",
      hi: "आत्मा न तो कभी जन्म लेती है और न ही कभी मरती है; और न ही एक बार अस्तित्व में आकर फिर कभी समाप्त होती है। आत्मा अजन्मा, नित्य, सनातन और पुरातन है। शरीर के नष्ट होने पर भी इसका नाश नहीं होता।"
    },
    commentary: {
      en: "Sri Krishna establishes the fundamental distinction between the temporary physical body and the eternal soul (Atman). Fear of death stems from identifying with the physical container. Understanding our eternal spiritual nature brings immense courage, resilience, and perspective to navigate the ups and downs of material life.",
      hi: "श्री कृष्ण अस्थायी भौतिक शरीर और शाश्वत आत्मा (आत्मन) के बीच मौलिक अंतर स्थापित करते हैं। मृत्यु का भय भौतिक शरीर के साथ पहचान जोड़ने से उत्पन्न होता है। अपनी शाश्वत आध्यात्मिक प्रकृति को समझने से भौतिक जीवन के उतार-चढ़ाव का सामना करने के लिए अपार साहस, लचीलापन और दृष्टिकोण मिलता है।"
    }
  },
  {
    chapter: 2,
    verse: 22,
    theme: "Change & Rebirth",
    sanskrit: "वासांसि जीर्णानि यथा विहाय नवानि गृह्णाति नरोऽपराणि।\nतथा शरीराणि विहाय जीर्णान्यन्यानि संयाति नवानि देही॥",
    transliteration: "vāsāṁsi jīrṇāni yathā vihāya navāni gṛhṇāti naro ’parāṇi\ntathā śarīrāṇi vihāya jīrṇāny anyāni saṁyāti navāni dehī",
    wordMeanings: "vāsāṁsi—garments; jīrṇāni—worn out; yathā—just as; vihāya—giving up; navāni—new ones; gṛhṇāti—accepts; naraḥ—a man; aparāṇi—others; tathā—similarly; śarīrāṇi—bodies; vihāya—giving up; jīrṇāni—worn out; anyāni—others; saṁyāti—enters into; navāni—new ones; dehī—the embodied soul.",
    translation: {
      en: "Just as a person discards worn-out clothes and puts on new ones, the soul similarly discards worn-out bodies and enters into new ones.",
      hi: "जैसे मनुष्य पुराने कपड़ों को छोड़कर नए कपड़े धारण करता है, वैसे ही जीवात्मा पुराने और अनुपयोगी शरीरों को त्याग कर नए भौतिक शरीरों में प्रवेश करती है।"
    },
    commentary: {
      en: "This beautiful metaphor clarifies that death is merely a transition, not an end. It compares changing physical bodies to changing clothes. This perspective de-stigmatizes death and helps us view life as a continuous journey of evolution where the core self remains untouched by physical decay.",
      hi: "यह सुंदर रूपक स्पष्ट करता है कि मृत्यु केवल एक संक्रमण (बदलाव) है, अंत नहीं। यह भौतिक शरीर को बदलने की तुलना कपड़े बदलने से करता है। यह दृष्टिकोण मृत्यु के भय को दूर करता है और हमें जीवन को विकास की एक सतत यात्रा के रूप में देखने में मदद करता है जहाँ मूल आत्मा भौतिक क्षय से अछूती रहती है।"
    }
  },
  {
    chapter: 4,
    verse: 7,
    theme: "Divine Manifestation",
    sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
    transliteration: "yadā yadā hi dharmasya glānir bhavati bhārata\nabhyutthānam adharmasya tadātmānaṁ sṛjāmy aham",
    wordMeanings: "yadā yadā—whenever; hi—indeed; dharmasya—of righteousness; glāniḥ—decline; bhavati—manifests; bhārata—O descendant of Bharata; abhyutthānam—rise; adharmasya—of unrighteousness; tadā—at that time; ātmānam—self; sṛjāmi—manifest/create; aham—I.",
    translation: {
      en: "Whenever and wherever there is a decline in righteousness, O descendant of Bharata, and a predominant rise of unrighteousness—at that time I manifest Myself.",
      hi: "हे भारत (अर्जुन)! जब-जब धर्म की हानि होती है और अधर्म का उत्थान होता है, तब-तब मैं अपने आप को साकार रूप में प्रकट करता हूँ।"
    },
    commentary: {
      en: "This verse promises the cosmic balance of the universe. When moral order (Dharma) decays and chaos (Adharma) triumphs, the Supreme consciousness intervenes directly to restore balance. It serves as an assurance of hope that light will always emerge to guide humanity whenever darkness threatens to overwhelm it.",
      hi: "यह श्लोक ब्रह्मांड के नैतिक संतुलन का वादा करता है। जब नैतिक व्यवस्था (धर्म) का क्षय होता है और अराजकता (अधर्म) की विजय होती है, तो परम चेतना संतुलन बहाल करने के लिए सीधे हस्तक्षेप करती है। यह आशा का एक आश्वासन है कि जब भी अंधकार हावी होने की कोशिश करेगा, प्रकाश हमेशा मानवता का मार्गदर्शन करने के लिए प्रकट होगा।"
    }
  },
  {
    chapter: 4,
    verse: 8,
    theme: "Restoration of Order",
    sanskrit: "परित्राणाय साधूनां विनाशाय च दुष्कृताम्।\nधर्मसंस्थापनार्थाय सम्भवामि युगे युगे॥",
    transliteration: "paritrāṇāya sādhūnāṁ vināśāya ca duṣkṛtām\ndharma-saṁsthāpanārthāya sambhavāmi yuge yuge",
    wordMeanings: "paritrāṇāya—for the deliverance; sādhūnām—of the virtuous; vināśāya—for the destruction; ca—and; duṣkṛtām—of the evil-doers; dharma—righteousness; saṁsthāpana-arthāya—to firmly re-establish; sambhavāmi—I manifest; yuge yuge—age after age.",
    translation: {
      en: "To protect the righteous, to destroy the wicked, and to firmly re-establish righteousness, I manifest myself age after age.",
      hi: "सज्जनों की रक्षा के लिए, दुष्टों का विनाश करने के लिए और धर्म की स्थापना करने के लिए मैं युग-युग में प्रकट होता हूँ।"
    },
    commentary: {
      en: "Sri Krishna explains the three-fold purpose of His divine descent: protection of those dedicated to virtue, eradication of destructive/evil forces, and the re-establishment of universal justice and spiritual principles. This cycle occurs repeatedly across ages (Yugas), assuring the ultimate victory of goodness.",
      hi: "श्री कृष्ण अपने ईश्वरीय अवतरण के तीन उद्देश्यों को समझाते हैं: धर्म के प्रति समर्पित सज्जनों की रक्षा, विनाशकारी/दुष्ट ताकतों का उन्मूलन, और सार्वभौमिक न्याय और आध्यात्मिक सिद्धांतों की पुनर्स्थापना। यह चक्र युगों-युगों (युग दर युग) में दोहराया जाता है, जो अच्छाई की अंतिम जीत का आश्वासन देता है।"
    }
  },
  {
    chapter: 2,
    verse: 62,
    theme: "Root of Ruin - Phase 1",
    sanskrit: "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते।\nसङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते॥",
    transliteration: "dhyāyato viṣayān puṁsaḥ saṅgas teṣūpajāyate\nsaṅgāt sañjāyate kāmaḥ kāmāt krodho ’bhijāyate",
    wordMeanings: "dhyāyataḥ—while contemplating; viṣayān—objects of the senses; puṁsaḥ—of a person; saṅgaḥ—attachment; teṣu—in them; upajāyate—develops; saṅgāt—from attachment; sañjāyate—arises; kāmaḥ—desire; kāmāt—from desire; krodhaḥ—anger; abhijāyate—manifests.",
    translation: {
      en: "While contemplating on the objects of the senses, a person develops attachment for them; from attachment arises desire, and from desire, anger is born.",
      hi: "विषयों (इंद्रियों के भोगों) का चिंतन करने वाले मनुष्य की उन विषयों में आसक्ति (लगाव) पैदा हो जाती है; आसक्ति से उन विषयों की कामना (इच्छा) उत्पन्न होती है और कामना में बाधा आने से क्रोध उत्पन्न होता है।"
    },
    commentary: {
      en: "This shloka map the psychological descent of a human mind. It starts with simple contemplation on sensory objects. Constant thinking breeds attachment, which transforms into intense desire to possess. When that desire is blocked (as it inevitably will be), it generates frustration and anger.",
      hi: "यह श्लोक मानव मन के पतन के मनोवैज्ञानिक चरणों को दर्शाता है। इसकी शुरुआत इंद्रियों के भोगों के साधारण चिंतन से होती है। निरंतर चिंतन से लगाव (आसक्ति) पैदा होता है, जो पाने की तीव्र इच्छा (कामना) में बदल जाता है। जब उस इच्छा में बाधा आती है, तो हताशा और क्रोध उत्पन्न होता है।"
    }
  },
  {
    chapter: 2,
    verse: 63,
    theme: "Root of Ruin - Phase 2",
    sanskrit: "क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः।\nस्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति॥",
    transliteration: "krodhād bhavati sammohaḥ sammohāt smṛti-vibhramaḥ\nsmṛti-bhraṁśād buddhi-nāśo buddhi-nāśāt praṇaśyati",
    wordMeanings: "krodhāt—from anger; bhavati—comes; sammohaḥ—delusion; sammohāt—from delusion; smṛti—of memory; vibhramaḥ—bewilderment/confusion; smṛti-bhraṁśāt—from loss of memory; buddhi-nāśaḥ—ruin of intellect; buddhi-nāśāt—from ruin of intellect; praṇaśyati—one is ruined.",
    translation: {
      en: "From anger arises delusion, and from delusion, confusion of memory; from confusion of memory comes the ruin of intellect, and with the ruin of intellect, a person is completely ruined.",
      hi: "क्रोध से सम्मोह (अविवेक/भ्रम) उत्पन्न होता है; सम्मोह से स्मृति भ्रमित हो जाती है; स्मृति भ्रमित होने से बुद्धि (विवेक) का नाश होता है; और बुद्धि का नाश होने से मनुष्य का पूर्ण विनाश हो जाता है।"
    },
    commentary: {
      en: "Continuing from the previous verse, anger clouds judgment, leading to delusion. This delusion makes a person forget past lessons and ethical values (loss of memory). Consequently, the capacity to distinguish right from wrong (intellect) is destroyed. Once intellect is lost, the individual falls into ruin. Controlling initial contemplation is key to avoiding this chain reaction.",
      hi: "पिछले श्लोक को जारी रखते हुए, क्रोध निर्णय क्षमता को धूमिल कर देता है, जिससे भ्रम उत्पन्न होता है। यह भ्रम मनुष्य को अतीत की सीखों और नैतिक मूल्यों को भुला देता है (स्मृति भ्रम)। परिणामस्वरूप, सही और गलत में अंतर करने की क्षमता (बुद्धि) नष्ट हो जाती है। बुद्धि नष्ट होने से मनुष्य का पतन हो जाता है। इस श्रृंखला से बचने के लिए शुरुआती चिंतन पर नियंत्रण रखना आवश्यक है।"
    }
  },
  {
    chapter: 3,
    verse: 21,
    theme: "Leadership",
    sanskrit: "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः।\nस यत्प्रमाणं कुरुते लोकस्तदनुवर्तते॥",
    transliteration: "yad yad ācarati śreṣṭhas tat tad evetaro janaḥ\nsa yat pramāṇaṁ kurute lokas tad anuvartate",
    wordMeanings: "yad yad—whatever; ācarati—performs; śreṣṭhaḥ—a respected/great leader; tat tat—that and that alone; eva—certainly; itaraḥ—common; janaḥ—people; saḥ—he; yat—whichever; pramāṇam—standard/example; kurute—sets; lokaḥ—the world; tat—that; anuvartate—follows.",
    translation: {
      en: "Whatever actions a great leader performs, common people follow. And whatever standards they set by exemplary acts, all the world pursues.",
      hi: "श्रेष्ठ पुरुष (नेता) जैसा आचरण करते हैं, अन्य पुरुष भी वैसा ही आचरण करते हैं। वह जो कुछ भी मानक या उदाहरण स्थापित कर देते हैं, समस्त संसार उसी का अनुसरण करता है।"
    },
    commentary: {
      en: "Sri Krishna stresses the immense responsibility of leaders, mentors, and elders. Common people look up to them and copy their behaviors rather than just listening to their words. Real leadership is demonstrated through personal conduct and setting a high standard of ethics, duty, and compassion.",
      hi: "श्री कृष्ण नेताओं, गुरुओं और बड़ों की अत्यधिक जिम्मेदारी पर जोर देते हैं। आम लोग उनके वचनों को सुनने के बजाय उनके व्यवहार को देखते हैं और उसकी नकल करते हैं। वास्तविक नेतृत्व व्यक्तिगत आचरण और नैतिकता, कर्तव्य तथा करुणा का उच्च स्तर स्थापित करके प्रदर्शित किया जाता है।"
    }
  },
  {
    chapter: 9,
    verse: 22,
    theme: "Divine Care",
    sanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥",
    transliteration: "ananyāś cintayanto māṁ ye janāḥ paryupāsate\nteṣāṁ nityābhiyuktānāṁ yoga-kṣemaṁ vahāmy aham",
    wordMeanings: "ananyāḥ—without deviation; cintayantaḥ—concentrating/thinking; mām—on Me; ye—who; janāḥ—people; paryupāsate—worship; teṣām—of them; nitya—always; abhiyuktānām—devoted/absorbed; yoga—providing what they lack; kṣemam—preserving what they have; vahāmi—carry; aham—I.",
    translation: {
      en: "For those who worship Me with undivided devotion, meditating constantly on My form, I personally carry what they lack and preserve what they already possess.",
      hi: "जो अनन्य प्रेमी भक्त मेरा निरंतर चिंतन करते हुए निष्काम भाव से मेरी उपासना करते हैं, उन नित्य निरंतर मुझमें लीन रहने वाले पुरुषों का योगक्षेम (जो उनके पास नहीं है उसे देना और जो है उसकी रक्षा करना) मैं स्वयं वहन करता हूँ।"
    },
    commentary: {
      en: "This is a verse of profound comfort. Sri Krishna guarantees that for those who completely align their lives and minds with the Divine, the universe looks after their well-being. 'Yoga' means providing the necessities of life (spiritual and material), and 'Kshema' means protecting what they already have. Faith brings peace.",
      hi: "यह परम सांत्वना का श्लोक है। श्री कृष्ण गारंटी देते हैं कि जो लोग अपने जीवन और मन को पूरी तरह से परमात्मा के साथ जोड़ लेते हैं, ब्रह्मांड उनकी भलाई का ख्याल रखता है। 'योग' का अर्थ है जीवन की आवश्यक वस्तुएं (आध्यात्मिक और भौतिक) प्रदान करना, और 'क्षेम' का अर्थ है जो उनके पास है उसकी रक्षा करना। विश्वास शांति लाता है।"
    }
  },
  {
    chapter: 9,
    verse: 26,
    theme: "Offering of Love",
    sanskrit: "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति।\nतदहं भक्त्युपहृतमश्नामि प्रयतात्मनः॥",
    transliteration: "patraṁ puṣpaṁ phalaṁ toyaṁ yo me bhaktyā prayacchati\ntad ahaṁ bhakty-upahṛtam aśnāmi prayatātmanaḥ",
    wordMeanings: "patram—a leaf; puṣpam—a flower; phalam—a fruit; toyam—water; yaḥ—whoever; me—unto Me; bhaktyā—with devotion; prayacchati—offers; tat—that; aham—I; bhakti-upahṛtam—offered in devotion; aśnāmi—accept/consume; prayata-ātmanaḥ—of one with a pure heart.",
    translation: {
      en: "If one offers Me with love and devotion a leaf, a flower, a fruit or water, I will accept it, offered as it is by a pure-hearted soul.",
      hi: "जो कोई भक्त मेरे लिए प्रेम और भक्ति से एक पत्ता, एक फूल, एक फल या जल अर्पित करता है, उस शुद्ध बुद्धि निष्काम प्रेमी भक्त का प्रेमपूर्वक भेंट किया हुआ वह उपहार मैं सहर्ष स्वीकार करता हूँ।"
    },
    commentary: {
      en: "The Divine is not interested in expensive materials or elaborate rituals; the only currency accepted is pure love and sincerity. A simple leaf or droplet of water offered with deep devotion holds far greater value than grand gifts offered with pride. Spirituality is accessible to everyone, regardless of wealth.",
      hi: "परमात्मा को महंगी सामग्रियों या जटिल अनुष्ठानों की आवश्यकता नहीं है; वे केवल सच्चे प्रेम और निष्कपटता के भूखे हैं। गहरे प्रेम के साथ अर्पित किया गया एक साधारण पत्ता या पानी की एक बूंद भी अहंकार से अर्पित किए गए भव्य उपहारों से कहीं अधिक मूल्यवान है। अध्यात्म हर किसी के लिए सुलभ है, चाहे वह अमीर हो या गरीब।"
    }
  },
  {
    chapter: 2,
    verse: 23,
    theme: "The Invincible Soul",
    sanskrit: "नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः।\nन चैनं क्लेदयन्त्यापो न शोषयति मारुतः॥",
    transliteration: "nainaṁ chindanti śastrāṇi nainaṁ dahati pāvakaḥ\nna cainaṁ kledayanty āpo na śoṣayati mārutaḥ",
    wordMeanings: "na—never; enam—this soul; chindanti—cut/shred; śastrāṇi—weapons; na—never; enam—this soul; dahati—burns; pāvakaḥ—fire; na—not; ca—and; enam—this soul; kledayanti—wets/dissolves; āpaḥ—water; na—not; śoṣayati—dries; mārutaḥ—wind.",
    translation: {
      en: "Weapons cannot shred this soul, nor can fire burn it. Water cannot wet it, nor can the wind dry it.",
      hi: "इस आत्मा को शस्त्र काट नहीं सकते, इसे आग जला नहीं सकती, इसे जल गीला नहीं कर सकता और वायु इसे सुखा नहीं सकती।"
    },
    commentary: {
      en: "This shloka explains the invincible nature of the soul. The physical elements of the universe—weapons (metals), fire, water, and wind—only interact with the physical world. The soul is of a higher, subtle spiritual dimension, making it entirely untouchable by physical damage, disease, or elements.",
      hi: "यह श्लोक आत्मा की अजेय प्रकृति को स्पष्ट करता है। ब्रह्मांड के भौतिक तत्व—शस्त्र (धातु), अग्नि, जल और वायु—केवल भौतिक संसार के साथ ही क्रिया कर सकते हैं। आत्मा एक उच्च, सूक्ष्म आध्यात्मिक आयाम की है, जिससे यह भौतिक क्षति, रोग या तत्वों से पूरी तरह अछूती रहती है।"
    }
  },
  {
    chapter: 12,
    verse: 15,
    theme: "Inner Peace",
    sanskrit: "यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः।\nहर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः॥",
    transliteration: "yasmān nodvijate loko lokān nodvijate ca yaḥ\nharṣāmarṣa-bhayodvegair mukto yaḥ sa ca me priyaḥ",
    wordMeanings: "yasmāt—by whom; na udvijate—is not disturbed/agitated; lokaḥ—the world; lokāt—from the world; na udvijate—is not agitated; ca—and; yaḥ—who; harṣa—exultation/joy; amarṣa—envy/intolerance; bhaya—fear; udvegaiḥ—anxiety; muktaḥ—free; yaḥ—who; saḥ—he; ca—also; me—to Me; priyaḥ—very dear.",
    translation: {
      en: "He by whom the world is not agitated and who is not agitated by the world, who is free from worldly pleasure, envy, fear, and anxiety, is very dear to Me.",
      hi: "जिससे किसी भी जीव को उद्वेग (कष्ट या अशांति) नहीं होता और जो स्वयं भी संसार के किसी जीव से उद्विग्न नहीं होता तथा जो हर्ष, ईर्ष्या, भय और व्याकुलता से मुक्त है, वह भक्त मुझे अत्यंत प्रिय है।"
    },
    commentary: {
      en: "Sri Krishna defines spiritual maturity as having emotional stability and positive relationships. A wise person does not cause distress or harm to others, nor does he allow the behaviors of others to disturb his inner calm. By transcending superficial emotions like excessive joy, envy, fear, and anger, one achieves a state of constant peace.",
      hi: "श्री कृष्ण आध्यात्मिक परिपक्वता को भावनात्मक स्थिरता और सकारात्मक संबंधों के रूप में परिभाषित करते हैं। एक बुद्धिमान व्यक्ति दूसरों को कष्ट या नुकसान नहीं पहुंचाता है, और न ही वह दूसरों के व्यवहार से अपनी आंतरिक शांति को भंग होने देता है। अत्यधिक खुशी, ईर्ष्या, भय और क्रोध जैसे सतही संवेगों से ऊपर उठकर ही कोई निरंतर शांति की स्थिति प्राप्त कर सकता है।"
    }
  },
  {
    chapter: 18,
    verse: 78,
    theme: "Righteous Victory",
    sanskrit: "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः।\nतत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम॥",
    transliteration: "yatra yogeśvaraḥ kṛṣṇo yatra pārtho dhanur-dharaḥ\ntatra śrīr vijayo bhūtir dhruvā nītir matir mama",
    wordMeanings: "yatra—wherever; yoga-īśvaraḥ—the Lord of Yoga; kṛṣṇaḥ—Krishna; yatra—wherever; pārthaḥ—the son of Pritha (Arjuna); dhanur-dharaḥ—the archer; tatra—there; śrīḥ—opulence/wealth; vijayaḥ—victory; bhūtiḥ—prosperity/power; dhruvā—certain; nītiḥ—morality/righteousness; matiḥ mama—this is my opinion.",
    translation: {
      en: "Wherever there is Krishna, the Lord of Yoga, and wherever there is Arjuna, the supreme archer, there will also certainly be opulence, victory, extraordinary power, and morality. This is my firm conviction.",
      hi: "जहाँ योगेश्वर श्री कृष्ण हैं और जहाँ धनुर्धारी अर्जुन हैं, वहाँ निश्चित रूप से ऐश्वर्य, विजय, विभूति (अलौकिक शक्ति) और अचल नीति (धर्म) रहेगी, ऐसा मेरा मत है।"
    },
    commentary: {
      en: "This is the final verse of the Bhagavad Gita, spoken by Sanjaya. It represents a synthesis of spiritual wisdom (represented by Yogeśvara Krishna) and active, dedicated effort in the world (represented by Dhanurdhara Arjuna). When divine wisdom and human action align in the service of righteousness (Dharma), success, justice, and prosperity are guaranteed.",
      hi: "यह संजय द्वारा बोला गया भगवद्गीता का अंतिम श्लोक है। यह आध्यात्मिक ज्ञान (योगेश्वर कृष्ण) और संसार में सक्रिय, समर्पित प्रयास (धनुर्धारी अर्जुन) के समन्वय को दर्शाता है। जब ईश्वरीय विवेक और मानवीय कर्म धर्म की सेवा में एक साथ आ जाते हैं, तो सफलता, न्याय और समृद्धि निश्चित होती है।"
    }
  },
  {
    chapter: 2,
    verse: 13,
    theme: "Evolution of the Soul",
    sanskrit: "देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा।\nतथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति॥",
    transliteration: "dehino ’smin yathā dehe kaumāraṁ yauvanaṁ jarā\ntathā dehāntara-prāptir dhīras tatra na muhyati",
    wordMeanings: "dehinaḥ—of the embodied soul; asmin—in this; yathā—just as; dehe—body; kaumāram—boyhood; yauvanam—youth; jarā—old age; tathā—similarly; deha-antara—another body; prāptiḥ—attainment; dhīraḥ—the wise; tatra—thereat; na—never; muhyati—is deluded.",
    translation: {
      en: "Just as the embodied soul continuously passes from boyhood to youth, and then to old age in this body, similarly the soul passes into another body at death. A wise person is not deluded by this.",
      hi: "जैसे इस शरीर में जीवात्मा क्रमिक रूप से बाल्यावस्था, युवावस्था और वृद्धावस्था को प्राप्त करती है, वैसे ही मृत्यु के समय वह दूसरे शरीर को प्राप्त करती है। बुद्धिमान व्यक्ति इससे भ्रमित नहीं होते।"
    },
    commentary: {
      en: "Sri Krishna draws a parallel between the changes we observe within a single lifetime and the change of bodies at death. Since we do not grieve when we transition from childhood to youth, we should not grieve when the soul shifts to a new body. The core consciousness remains identical throughout all physical changes.",
      hi: "श्री कृष्ण एक ही जीवनकाल में होने वाले परिवर्तनों और मृत्यु के समय होने वाले शरीर परिवर्तन के बीच एक समानता दर्शाते हैं। चूंकि हम बाल्यावस्था से युवावस्था में प्रवेश करते समय शोक नहीं मनाते हैं, इसलिए आत्मा के नए शरीर में जाने पर भी हमें शोक नहीं मनाना चाहिए। भौतिक परिवर्तनों के बीच मूल चेतना वैसी ही बनी रहती है।"
    }
  },
  {
    chapter: 3,
    verse: 19,
    theme: "Selfless Action",
    sanskrit: "तस्मादसक्तः सततं कार्यं कर्म समाचर।\nअसक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः॥",
    transliteration: "tasmād asaktaḥ satataṁ kāryaṁ karma samācara\nasakto hy ācaran karma param āpnoti pūruṣaḥ",
    wordMeanings: "tasmāt—therefore; asaktaḥ—without attachment; satatam—constantly; kāryam—prescribed/obligatory; karma—duties; samācara—perform; asaktaḥ—unattached; hi—indeed; ācaran—performing; karma—work; param—the Supreme; āpnoti—attains; pūruṣaḥ—a person.",
    translation: {
      en: "Therefore, without attachment, constantly perform the duties that ought to be done. By performing actions without attachment, a person reaches the Supreme.",
      hi: "इसलिए, तुम आसक्ति (लगाव) से रहित होकर निरंतर अपने कर्तव्य कर्मों का अच्छी तरह से संपादन करो। क्योंकि आसक्ति के बिना कर्म करता हुआ मनुष्य परमात्मा को प्राप्त कर लेता है।"
    },
    commentary: {
      en: "Freedom from attachment does not mean running away from society or duties. True freedom is found in the midst of action. By performing our daily work as an offering, without being driven by personal craving for praise or success, we purify our mind and experience spiritual liberation while living in the world.",
      hi: "आसक्ति से मुक्ति का अर्थ समाज या कर्तव्यों से भागना नहीं है। सच्ची स्वतंत्रता कर्म के बीच में ही पाई जाती है। व्यक्तिगत प्रशंसा या सफलता की लालसा के बिना, अपने दैनिक कार्यों को एक सेवा के रूप में करने से हमारा मन शुद्ध होता है और हम जीवन जीते हुए भी आध्यात्मिक मुक्ति का अनुभव करते हैं।"
    }
  },
  {
    chapter: 5,
    verse: 18,
    theme: "Equal Vision",
    sanskrit: "विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि।\nशुनि चैव श्वपाके च पण्डिताः समदर्शिनः॥",
    transliteration: "vidyā-vinaya-sampanne brāhmaṇe gavi hastini\nśuni caiva śvapāke ca paṇḍitāḥ sama-darśinaḥ",
    wordMeanings: "vidyā—education; vinaya—humility; sampanne—equipped with; brāhmaṇe—in a priest/scholar; gavi—in a cow; hastini—in an elephant; śuni—in a dog; ca—and; eva—certainly; śvapāke—in an outcast/dog-eater; ca—and; paṇḍitāḥ—the truly wise; sama-darśinaḥ—see with equal vision.",
    translation: {
      en: "The truly wise, by virtue of spiritual knowledge, see with equal vision a learned and humble scholar, a cow, an elephant, a dog, and a dog-eater.",
      hi: "ज्ञानी जन विद्या और विनय से युक्त ब्राह्मण, गाय, हाथी, कुत्ते और चांडाल (समान रूप से सभी जीवों) में एक ही आत्म-तत्त्व को देखते हैं और उनके प्रति समदर्शी होते हैं।"
    },
    commentary: {
      en: "Spiritual realization dissolves all social, racial, and species boundaries. A sage looks past external coverings—such as intellect, wealth, birth, or physical species—and sees the same divine spark (Atman) residing in all living beings. This is the foundation of cosmic compassion and universal brotherhood.",
      hi: "आध्यात्मिक साक्षात्कार सभी सामाजिक, नस्लीय और वर्गगत सीमाओं को समाप्त कर देता है। एक ज्ञानी व्यक्ति बाहरी आवरणों—जैसे बुद्धि, धन, जन्म या प्रजाति—से परे देखता है और सभी जीवों में निवास करने वाली एक ही ईश्वरीय ज्योति (आत्मा) को महसूस करता है। यही ब्रह्मांडीय करुणा और वैश्विक भाईचारे का आधार है।"
    }
  },
  {
    chapter: 7,
    verse: 7,
    theme: "Supreme Source",
    sanskrit: "मत्तः परतरं नान्यत्किञ्चिदस्ति धनञ्जय।\nमयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव॥",
    transliteration: "mattaḥ parataraṁ nānyat kiñcid asti dhanañjaya\nmayi sarvam idaṁ protaṁ sūtre maṇi-gaṇā iva",
    wordMeanings: "mattaḥ—beyond Me; parataram—superior; na anyat—nothing else; kiñcit—any; asti—there is; dhanañjaya—O conqueror of wealth (Arjuna); mayi—in Me; sarvam—all; idam—this; protam—threaded/strung; sūtre—on a thread; maṇi-gaṇāḥ—pearls/beads; iva—like.",
    translation: {
      en: "There is nothing superior to Me, O Dhananjaya. Everything in the universe rests upon Me, like pearls strung on a thread.",
      hi: "हे धनंजय (अर्जुन)! मुझसे श्रेष्ठ अन्य कोई कारण नहीं है। यह सम्पूर्ण जगत् मुझमें ही पिरोया हुआ है, जैसे धागे में मणियाँ (मोती) पिरोई होती हैं।"
    },
    commentary: {
      en: "Sri Krishna explains that the Divine is the underlying connecting fabric of all creation. Just as beads of a necklace are held together by an invisible underlying string, all beings and natural forces are sustained and interconnected by the supreme consciousness. Recognizing this unity leads to deep devotion.",
      hi: "श्री कृष्ण समझाते हैं कि परमात्मा ही समस्त सृष्टि का आधारभूत संपर्क सूत्र है। जैसे हार के मोती एक अदृश्य धागे द्वारा एक साथ टिके रहते हैं, वैसे ही सभी जीव और प्राकृतिक शक्तियां परम चेतना द्वारा ही पोषित और अंतर्संबंधित हैं। इस एकता को पहचानने से भक्ति का उदय होता है।"
    }
  },
  {
    chapter: 10,
    verse: 41,
    theme: "Divine Splendor",
    sanskrit: "यद्यद्विभूतिमत्सत्त्वं श्रीमदूर्जितमेव वा।\nतत्तदेवावगच्छ त्वं मम तेजोंऽशसम्भवम्॥",
    transliteration: "yad yad vibhūtimat sattvaṁ śrīmad ūrjitam eva vā\ntat tad evāvagaccha tvaṁ mama tejo-’ṁśa-sambhavam",
    wordMeanings: "yad yad—whatever; vibhūti-mat—glorious/opulent; sattvam—being/creation; śrī-mat—beautiful/prosperous; ūrjitam—powerful/mighty; eva—certainly; vā—or; tat tat—all that; eva—certainly; avagaccha—know; tvam—you; mama—My; tejaḥ—of splendor; aṁśa—a fraction; sambhavam—born of.",
    translation: {
      en: "Know that whatever is glorious, beautiful, prosperous, or mighty in this world is born from but a mere spark of My splendor.",
      hi: "जो-जो भी विभूतियुक्त (ऐश्वर्ययुक्त), शोभायुक्त और कांतियुक्त तथा शक्ति से युक्त वस्तु है, उस-उसको तुम मेरे ही तेज के अंश से उत्पन्न जानो।"
    },
    commentary: {
      en: "Whenever we are awed by a breathtaking sunrise, a towering mountain, a genius idea, or a person of exceptional kindness, we are catching a glimpse of the Divine. Sri Krishna states that all worldly excellence and beauty are fractional reflections of the infinite majesty of the Supreme creator.",
      hi: "जब भी हम एक लुभावने सूर्योदय, एक ऊंचे पहाड़, एक प्रतिभाशाली विचार, या एक असाधारण दयालु व्यक्ति को देखकर विस्मय में पड़ते हैं, तो हम वास्तव में ईश्वर की ही एक झलक देख रहे होते हैं। श्री कृष्ण कहते हैं कि दुनिया की सभी उत्कृष्टता और सुंदरता परमात्मा के अनंत वैभव की आंशिक छाया है।"
    }
  },
  {
    chapter: 12,
    verse: 13,
    theme: "Qualities of a Devotee",
    sanskrit: "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च।\nनिर्ममो निरहङ्कारः समदुःखसुखः क्षमी॥",
    transliteration: "adveṣṭā sarva-bhūtānāṁ maitraḥ karuṇa eva ca\nnirmamo nirahankāraḥ sama-duḥkha-sukhaḥ kṣamī",
    wordMeanings: "adveṣṭā—non-envious/free from hatred; sarva-bhūtānām—toward all living beings; maitraḥ—friendly; karuṇaḥ—compassionate; eva—certainly; ca—and; nirmamaḥ—free from possessiveness; nirahankāraḥ—free from ego; sama—equal/poised; duḥkha—in pain; sukha—in pleasure; kṣamī—forgiving.",
    translation: {
      en: "One who does not hate any living being, who is friendly and compassionate toward all, free from possessiveness and egoism, balanced in pleasure and pain, and forgiving...",
      hi: "जो पुरुष किसी भी जीव से द्वेष (नफरत) नहीं करता, जो सभी के प्रति दयालु और मित्र भाव रखता है, ममता (स्वामित्व) से रहित और अहंकार से मुक्त है, सुख-दुःख में शांत रहता है और सबको क्षमा करने वाला है..."
    },
    commentary: {
      en: "This shloka lists the ethical and emotional qualities of an advanced seeker. To walk the spiritual path, one must actively cultivate goodwill toward all, discard pride ('me' and 'mine'), remain balanced during favorable and unfavorable situations, and possess a large heart that forgives mistakes.",
      hi: "यह श्लोक एक उच्च साधक के नैतिक और भावनात्मक गुणों की सूची देता है। आध्यात्मिक पथ पर चलने के लिए, व्यक्ति को सभी के प्रति सद्भावना विकसित करनी चाहिए, गर्व और मोह ('मैं' और 'मेरा') को छोड़ना चाहिए, अनुकूल और प्रतिकूल परिस्थितियों में संतुलित रहना चाहिए, और एक विशाल हृदय रखना चाहिए जो दूसरों की गलतियों को क्षमा कर सके।"
    }
  },
  {
    chapter: 15,
    verse: 7,
    theme: "The Divine Spark",
    sanskrit: "ममैवांशो जीवलोके जीवभूतः सनातनः।\nमनःषष्ठानीन्द्रियाणि प्रकृतिस्थानि कर्षति॥",
    transliteration: "mamaivāṁśo jīva-loke jīva-bhūtaḥ sanātanaḥ\nmanaḥ-ṣaṣṭhānīndriyāṇi prakṛti-sthāni karṣati",
    wordMeanings: "mama—My; eva—certainly; aṁśaḥ—fragment/part; jīva-loke—in the world of living beings; jīva-bhūtaḥ—becoming a living soul; sanātanaḥ—eternal; manaḥ—mind; ṣaṣṭhāni—including the sixth; indriyāṇi—the senses; prakṛti—in material nature; sthāni—situated; karṣati—struggles/draws.",
    translation: {
      en: "The living entities in this conditioned world are My eternal fragmental parts. Due to conditioned life, they struggle with the six senses, which include the mind.",
      hi: "इस संसार में प्रत्येक जीव मेरा ही सनातन अंश है। किंतु भौतिक प्रकृति के प्रभाव में आकर वे मन सहित छहों इंद्रियों के द्वारा कड़ा संघर्ष करते हैं।"
    },
    commentary: {
      en: "Sri Krishna explains that every soul is inherently divine, being an eternal part of the supreme consciousness. However, once embedded in the material body, the soul gets caught up in the thoughts of the mind and desires of the senses, leading to struggle. Realizing our connection to the source ends this struggle.",
      hi: "श्री कृष्ण समझाते हैं कि प्रत्येक आत्मा स्वाभाविक रूप से दिव्य है, जो परम चेतना का एक शाश्वत हिस्सा है। हालांकि, भौतिक शरीर में प्रवेश करने के बाद, आत्मा मन के विचारों और इंद्रियों की इच्छाओं में फंस जाती है, जिससे संघर्ष होता है। स्रोत के साथ हमारे संबंध का एहसास ही इस संघर्ष को समाप्त करता है।"
    }
  },
  {
    chapter: 18,
    verse: 65,
    theme: "Pure Devotion",
    sanskrit: "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु।\nमामेवैष्यसि सत्यं ते प्रतिजाने प्रियोऽसि मे॥",
    transliteration: "man-manā bhava mad-bhakto mad-yājī māṁ namaskuru\nmām evaiṣyasi satyaṁ te pratijāne priyo ’si me",
    wordMeanings: "mat-manāḥ—always thinking of Me; bhava—become; mat-bhaktaḥ—My devotee; mat-yājī—My worshiper; mām—unto Me; namaskuru—offer respects; mām—unto Me; eva—certainly; eṣyasi—you will come; satyam—truly; te—unto you; pratijāne—I promise; priyaḥ—dear; asi—you are; me—to Me.",
    translation: {
      en: "Always think of Me, become My devotee, worship Me, and offer your respects unto Me. Thus you will certainly come to Me. I promise you this truly, for you are very dear to Me.",
      hi: "अपना मन मुझमें लगाओ, मेरे भक्त बनो, मेरी पूजा करो और मुझे नमस्कार करो। ऐसा करने से तुम निश्चित रूप से मुझे ही प्राप्त होगे। मैं तुमसे यह सत्य प्रतिज्ञा करता हूँ, क्योंकि तुम मुझे अत्यंत प्रिय हो।"
    },
    commentary: {
      en: "This verse contains Sri Krishna's personal pledge. It presents four practices to cultivate god-consciousness: focusing the intellect on the divine, offering love, performing actions in service, and cultivating humility. This path of devotion (Bhakti) is assured because of the mutual love between the seeker and the Divine.",
      hi: "यह श्लोक श्री कृष्ण की व्यक्तिगत प्रतिज्ञा को दर्शाता है। यह ईश्वरीय चेतना विकसित करने के लिए चार अभ्यास प्रस्तुत करता है: बुद्धि को परमात्मा में लगाना, प्रेम अर्पित करना, सेवा भाव से कर्म करना और विनम्रता विकसित करना। भक्ति का यह मार्ग अत्यंत सुलभ और निश्चित है क्योंकि साधक और परमात्मा के बीच गहरा प्रेम संबंध होता है।"
    }
  },
  {
    chapter: 4,
    verse: 34,
    theme: "Seeking Wisdom",
    sanskrit: "तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया।\nउपदेक्ष्यन्ति ते ज्ञानं ज्ञानिनस्तत्त्वदर्शिनः॥",
    transliteration: "tad viddhi praṇipātena paripraśnena sevayā\nupadekṣyanti te jñānaṁ jñāninas tattva-darśinaḥ",
    wordMeanings: "tat—that (spiritual truth); viddhi—try to learn; praṇipātena—by bowing down/humility; paripraśnena—by relevant inquiries; sevayā—by rendering service; upadekṣyanti—will initiate/instruct; te—unto you; jñānam—knowledge; jñāninaḥ—the wise; tattva-darśinaḥ—those who have seen the truth.",
    translation: {
      en: "Learn this truth by approaching a spiritual master. Inquire submissively, render service, and the wise who have realized the truth will initiate you into this knowledge.",
      hi: "उस ज्ञान को तुम गुरु के पास जाकर, उन्हें साष्टांग प्रणाम करके, सेवा करके और निष्कपट भाव से प्रश्न करके सीखो। वे सत्य को जानने वाले ज्ञानी पुरुष तुम्हें उस ज्ञान का उपदेश देंगे।"
    },
    commentary: {
      en: "Sri Krishna describes how to acquire spiritual knowledge. It requires three components: humility (praṇipāta), sincere and logical inquiry (paripraśna), and an attitude of helpfulness and service (sevā). Intellectual pride blocks wisdom; open-minded respect combined with critical thinking allows truth to flow from master to student.",
      hi: "श्री कृष्ण बताते हैं कि आध्यात्मिक ज्ञान कैसे प्राप्त किया जाए। इसके लिए तीन घटकों की आवश्यकता होती है: विनम्रता (प्रणिपात), निष्कपट और तर्कसंगत प्रश्न (परिप्रश्न), तथा सेवा भाव (सेवा)। बौद्धिक अहंकार ज्ञान को रोकता है; आलोचनात्मक सोच और खुले दिमाग से किया गया आदर ही सत्य को गुरु से शिष्य तक बहने की अनुमति देता है।"
    }
  }
];
