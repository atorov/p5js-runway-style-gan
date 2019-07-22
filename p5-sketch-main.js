const p5Main = new p5((s) => {
  // const z = [
  //   1.550055852836373,
  //   -0.0030109567006336158,
  //   -0.12221136523330443,
  //   -0.11303263764227899,
  //   0.5152753848900005,
  //   0.20054861459930584,
  //   -0.04276034424205301,
  //   -0.23595430651204535,
  //   -0.733020594615613,
  //   -0.2632192671268014,
  //   0.029195765606147034,
  //   -0.2628356079568225,
  //   -0.04602915732033326,
  //   -0.31815684095613506,
  //   -0.5576376740431834,
  //   -0.17419094709612237,
  //   -0.2230863924644031,
  //   0.17522362227525184,
  //   -0.2785118293208698,
  //   0.587034428832004,
  //   -0.003279664044147146,
  //   -0.25860041397682487,
  //   -0.3099985794694181,
  //   -0.18785434957775562,
  //   0.5083958423897588,
  //   -0.5264465278606998,
  //   -0.5392956387551221,
  //   -0.3810105336916373,
  //   0.3467933284792376,
  //   -0.49168419094282495,
  //   0.6073422692025593,
  //   0.029220806279427514,
  //   -0.06371654092086608,
  //   -0.3715604305812841,
  //   -0.011888243256129527,
  //   0.34062455756458254,
  //   0.5620585966098091,
  //   0.3910967986900099,
  //   0.12805854177361872,
  //   -0.2521258455992518,
  //   -0.008000051605512148,
  //   -0.3864008658604252,
  //   -0.06707054232874862,
  //   0.14507158280985366,
  //   -0.7971079593450854,
  //   0.9851399970813154,
  //   -0.30717353083648585,
  //   0.7324948011380317,
  //   0.06079302227368487,
  //   0.547723591743069,
  //   -0.18644933505799516,
  //   -0.0943926147722221,
  //   -0.4285429988364243,
  //   -0.3969586023851349,
  //   -0.3611770399452086,
  //   0.5699899672139384,
  //   -0.06700030785516364,
  //   -0.02347117981102914,
  //   0.12479140519997398,
  //   0.028650449756240898,
  //   -0.14225459226557968,
  //   0.4377181104098031,
  //   -0.28711398042591385,
  //   0.31549278406110026,
  //   -0.09855127925179874,
  //   -0.4760694080919693,
  //   0.5661678606305802,
  //   0.4047955841725103,
  //   0.49613496269651597,
  //   0.14270689935144396,
  //   0.24041796353797135,
  //   0.28354987244937463,
  //   -0.03896723074532585,
  //   -0.1262188220433573,
  //   0.530107749275141,
  //   -0.8254375289039095,
  //   0.1804340355517447,
  //   -0.5656714522736542,
  //   -0.06475957629769588,
  //   0.4399625141454865,
  //   0.206114724094055,
  //   0.6537136892899372,
  //   -0.429785576636358,
  //   -0.30708096246552297,
  //   0.09774745575418235,
  //   -0.49263293810749254,
  //   0.26417970487781145,
  //   0.35596331671622583,
  //   -0.3568398010804797,
  //   0.5071232053856338,
  //   0.0013006220262698487,
  //   -0.04193274168156011,
  //   -0.40029543083361935,
  //   0.5311044174379483,
  //   0.23391839169783432,
  //   0.15795643493502226,
  //   0.14862411447170346,
  //   0.16728188106994557,
  //   0.2879126805007351,
  //   -0.031951005088097006,
  //   0.20363240629532378,
  //   -0.32290338084188536,
  //   0.45133973405859545,
  //   -0.5530365174360196,
  //   -0.06291342574333439,
  //   0.3834311334332518,
  //   -0.6010306058532159,
  //   -0.6029530314208917,
  //   0.16405066059370815,
  //   -0.14097247240320118,
  //   -0.013211725353925771,
  //   -0.2892183265046643,
  //   0.09944654352717727,
  //   -0.1333773988581638,
  //   -0.22168563894727727,
  //   0.46333368615976545,
  //   0.4913056114893839,
  //   0.5004285401309632,
  //   0.38437360801554826,
  //   -0.1931340022922255,
  //   0.86155161333049,
  //   -0.15156948283376417,
  //   -0.5965542159844218,
  //   -0.05907736860113878,
  //   -0.10976133095757767,
  //   0.9312596214116331,
  //   -0.4122515140936308,
  //   -0.7131714262584644,
  //   -0.16614403439865333,
  //   0.4484812155170186,
  //   0.2859218071545606,
  //   -0.4642292542477613,
  //   -0.04608932785470937,
  //   -0.9166987317525471,
  //   0.2659489001651282,
  //   0.39701344266145866,
  //   -0.5598779271099104,
  //   -0.40076502078271803,
  //   0.37898436988292544,
  //   0.7641031658356334,
  //   0.24408938732775096,
  //   0.20881166270589008,
  //   0.23167337460376047,
  //   -0.4196893857159446,
  //   -0.06584416204303337,
  //   0.1394429454317466,
  //   0.5415596924965566,
  //   0.12725575262735592,
  //   0.19070768433370633,
  //   0.042074085320122405,
  //   -0.2667149059308042,
  //   0.03317302249266307,
  //   0.050330105574479186,
  //   0.4018702856181487,
  //   -0.02578088733220469,
  //   0.032468972186818545,
  //   -0.056118925519564766,
  //   -0.4744023762845163,
  //   0.5209571048815151,
  //   0.23118143506987168,
  //   0.18703967659127305,
  //   0.6781161727541865,
  //   0.05030931393613178,
  //   -0.2453948111505521,
  //   -0.4578676335210313,
  //   1.0004662462941414,
  //   -1.0707434630124435,
  //   0.410553552149165,
  //   -0.13404357773065154,
  //   0.30939798832695026,
  //   -0.017001124386116395,
  //   0.27416052418906756,
  //   0.06917472684231801,
  //   -0.6045402974871449,
  //   0.12450582998583229,
  //   -0.45750648170122,
  //   -0.4179446155201063,
  //   -0.03550285231315202,
  //   0.32217900561928237,
  //   -0.4279317993728298,
  //   0.09303974619238288,
  //   0.1684005844952989,
  //   -0.2408065377819968,
  //   -0.23172924148338825,
  //   0.4867729063493856,
  //   0.050239067977999506,
  //   0.14291565383157645,
  //   -0.4607037523249908,
  //   -0.22297328045766332,
  //   -0.6250206352012263,
  //   -0.0990635540705206,
  //   -0.1398415246929421,
  //   -0.08346402567306656,
  //   -0.7449604504030864,
  //   -0.1874962461917613,
  //   0.16643340735174214,
  //   0.3204051000579008,
  //   0.1082548573136877,
  //   0.0043744928404482325,
  //   0.642330252514308,
  //   0.3275781649765416,
  //   0.15668524083776825,
  //   0.02919602912668097,
  //   0.4979583724175394,
  //   -0.6323775381519141,
  //   0.739627223776407,
  //   -0.2487096081407225,
  //   0.4509226330654592,
  //   0.7749813164936936,
  //   -0.5051151835673594,
  //   -0.022721481705935277,
  //   -0.07076060073022097,
  //   0.4539155908949017,
  //   -0.22195297402039318,
  //   0.2814328791748192,
  //   -0.15264045623630873,
  //   0.4084547926057938,
  //   -0.1244951334286461,
  //   -0.5300799197984476,
  //   -0.9830238915241462,
  //   -0.030601777783960865,
  //   0.3754417243109501,
  //   -0.2895835833550837,
  //   -0.1860796004218296,
  //   0.23872672906001735,
  //   -0.18035557752699616,
  //   -0.2343515326746275,
  //   -0.15254961304088638,
  //   -0.24326370817915668,
  //   0.3338348846769825,
  //   0.41612845796161957,
  //   -0.07870781226708716,
  //   -0.4542926781746485,
  //   -0.011292084951633308,
  //   -0.19492732627729514,
  //   0.08823574915018957,
  //   -0.046938184273603634,
  //   0.21436961963447537,
  //   0.48791643187745254,
  //   -0.06528815899476612,
  //   0.22637429730550995,
  //   -0.6564529725182856,
  //   -0.38860486844198705,
  //   0.027916186699617485,
  //   0.2340244774885861,
  //   -0.28126067245097797,
  //   -0.12421122865130718,
  //   0.3907642240733167,
  //   -0.39670382572553387,
  //   -0.34255969568812983,
  //   0.2453361562038524,
  //   -1.1822078752480518,
  //   0.7769889949560785,
  //   0.3644273824973552,
  //   -0.12093693667302952,
  //   0.4142497340391876,
  //   0.11790974686430843,
  //   0.16658232909226128,
  //   0.268440801058258,
  //   -0.6791023735299361,
  //   -0.08816499735935754,
  //   0.03293866621738548,
  //   0.22733319629658738,
  //   -0.8973774291242607,
  //   0.1908892863551666,
  //   -0.3904126364363929,
  //   0.2146200991143803,
  //   -0.32897462656478554,
  //   -0.3362087336912504,
  //   0.3686438265000038,
  //   0.04797229944323844,
  //   -0.48966514798940186,
  //   0.2251776316180885,
  //   -0.0401706782092669,
  //   0.11682958457425843,
  //   -0.1513599852534742,
  //   0.43065221256521075,
  //   0.2196862689587098,
  //   0.0669442849155957,
  //   -0.14936878771824025,
  //   -0.16547929023231445,
  //   -0.1657786925808302,
  //   -0.1299249874890889,
  //   0.24337668626034867,
  //   -0.08382418094032695,
  //   0.7119352723030623,
  //   -0.1964955188403826,
  //   -0.10798048946499812,
  //   -0.3983172539010383,
  //   0.0019689939367619758,
  //   -0.7279959498553674,
  //   -0.525343969733705,
  //   0.3158644897161217,
  //   0.32222186802453673,
  //   -0.2601851114777066,
  //   0.6326162387388675,
  //   -0.7793574770818941,
  //   -0.024706086348132955,
  //   -0.3908067547640608,
  //   -0.3642642149115702,
  //   -0.16155721841861093,
  //   0.22392745366647815,
  //   -0.6829212730128837,
  //   -0.057054842613983636,
  //   -0.3838832616436322,
  //   -0.3168142164748051,
  //   0.503790185266945,
  //   0.7339222650517958,
  //   -0.07644566888533927,
  //   0.153460736919754,
  //   0.12374406183043274,
  //   0.12744326089563368,
  //   0.45508870450490224,
  //   0.48548992358230436,
  //   -0.0017663128103948544,
  //   -0.09720629316557687,
  //   0.22726999674316004,
  //   0.27732668441866126,
  //   -0.3973581127745169,
  //   0.16332913884378306,
  //   -0.5025545389087799,
  //   -0.23361914437643666,
  //   0.24746056420971818,
  //   0.2181120213643513,
  //   0.491961861081347,
  //   0.15404098053681833,
  //   -0.08091958458114082,
  //   -0.1413633423547228,
  //   0.2612037925777456,
  //   0.39876852409189745,
  //   0.29601992134784794,
  //   -0.08620953857187769,
  //   0.7537193999258995,
  //   0.18696863445726278,
  //   0.06063351495201691,
  //   -0.06858319716288278,
  //   0.23096411333349254,
  //   0.48296355797076773,
  //   0.009635638206990552,
  //   0.4743886528872325,
  //   0.7662255747309497,
  //   -0.2664467442263582,
  //   0.13246398616605148,
  //   -0.2282185816433494,
  //   0.9487991678024432,
  //   0.5970561925921423,
  //   0.11311517728550186,
  //   0.450967964818796,
  //   0.22753318729603628,
  //   0.12277800990370083,
  //   0.2896113309391507,
  //   -0.10267535539191079,
  //   -0.46703959856129684,
  //   -0.012718643944244323,
  //   -0.5478312238905467,
  //   0.3429171988602392,
  //   1.420818514852918,
  //   0.7103865139606049,
  //   -0.26269094951086813,
  //   -0.4491947446383477,
  //   0.424450084793888,
  //   0.016545336834116214,
  //   -0.03842632852855751,
  //   0.1282724064933339,
  //   -0.12669519741951984,
  //   -0.3357480113630346,
  //   -0.08631371636527319,
  //   0.2404157873640805,
  //   -0.11007699848399201,
  //   -0.08665532219899663,
  //   0.8440375196513964,
  //   -0.3920747629110476,
  //   0.5280404260121181,
  //   -0.38189344147584314,
  //   0.09079485843307099,
  //   -0.1689769903959411,
  //   0.29361513960912566,
  //   0.29920783084732966,
  //   0.20856056356115094,
  //   0.730793202419299,
  //   -0.49719140909730297,
  //   0.21109570039206577,
  //   -0.18801607390239206,
  //   -0.14900091267144444,
  //   0.19763848369150716,
  //   0.12265079550918125,
  //   0.0724306712939028,
  //   -1.0613710402852408,
  //   0.06707441404295852,
  //   -0.25182519937340286,
  //   0.2118029195383993,
  //   0.12061430671499573,
  //   -0.036147688795976865,
  //   -0.34539070175136377,
  //   -0.25931132308447497,
  //   -0.009886975512543208,
  //   -0.5978268171623636,
  //   -0.39871482286929943,
  //   0.21892145587627038,
  //   -0.645822827983737,
  //   -0.0033224232285150312,
  //   -0.25455193980430796,
  //   0.04977303314027334,
  //   -0.41997289636358276,
  //   -0.3200067865698673,
  //   -0.4016897402462408,
  //   0.28223423659357605,
  //   0.22125483677237975,
  //   -0.33214747574563797,
  //   -0.21105995508367592,
  //   -0.3108318794290792,
  //   0.10706393392997288,
  //   0.029256601064854032,
  //   0.7049275759203244,
  //   0.008329809674709338,
  //   0.5312630933353061,
  //   0.046744731903778175,
  //   0.14991911840267166,
  //   0.5742309344919891,
  //   0.23073170341006718,
  //   0.5945795363672775,
  //   0.43920394007208874,
  //   0.0296134930257851,
  //   -0.06914476753550969,
  //   0.7654260105152721,
  //   0.17065025107432763,
  //   -0.023057051368224613,
  //   -0.34008972562277173,
  //   -0.3205034040615999,
  //   0.015215470848712248,
  //   -0.33471155137932396,
  //   0.06258875733898908,
  //   -0.0054983790750748815,
  //   -0.39425726656510784,
  //   -0.1733187648763327,
  //   0.13969807048677282,
  //   0.974321222693002,
  //   0.11447626274604128,
  //   0.07697842684341791,
  //   -0.2477232363970637,
  //   -0.9545687040025881,
  //   -0.5586954706288434,
  //   -0.7014218650228392,
  //   0.09371236633505556,
  //   -0.5064525912489803,
  //   -0.6465967992426358,
  //   0.33728272311840063,
  //   -0.2881345096232201,
  //   -0.5646178268364607,
  //   0.12746933662110405,
  //   0.19546230782695548,
  //   -0.3953865083499215,
  //   1.0169722364707117,
  //   -0.14316979789056344,
  //   -0.2994579064680447,
  //   -0.27776148376936577,
  //   0.4178052790599623,
  //   0.5687581949694605,
  //   0.9042893452335516,
  //   0.3090820374405344,
  //   0.00006280760576367339,
  //   -1.0148315788348352,
  //   0.0056976504920477865,
  //   0.16648245622626195,
  //   -0.21108478662711885,
  //   -0.5646257858371104,
  //   -0.06873181203825213,
  //   -0.4068129214867912,
  //   -0.198380643041788,
  //   -0.19569193434943227,
  //   0.2009953419220769,
  //   0.006609015372193043,
  //   -0.07716693780740713,
  //   0.5074730016353848,
  //   -0.28786828191881697,
  //   0.3475541565371568,
  //   -0.26928099834118424,
  //   0.4108145001853897,
  //   -0.2245294747713367,
  //   0.1731987947263942,
  //   0.46237474197320083,
  //   0.18901245065707734,
  //   0.6196112802361304,
  //   -0.2309114248787268,
  //   0.5825604041323574,
  //   -0.4691982579552367,
  //   0.9705504772576724,
  //   -0.2331949341073856,
  //   0.08243808121416124,
  //   -0.31216770831124163,
  //   0.10835074298610747,
  //   0.07905051854625511,
  //   0.10256588182092566,
  //   0.49884827627727674,
  //   0.09479559765046594,
  //   0.6270113586561139,
  //   -0.48531817685893774,
  //   0.046722904065021664,
  //   0.18295178235887494,
  //   -0.15391483072250184,
  //   -0.6383650213824705,
  //   0.599357196538665,
  //   0.19736006639943693,
  //   -0.2980596071073017,
  //   0.39824924688112834,
  //   -0.522650293267512,
  //   -0.7069637199526455,
  //   -0.13339822724313277,
  //   -0.38834812316041,
  //   -0.6908646080363678,
  //   -0.32605174372949,
  //   -0.424899045644747,
  // ];

  function delay(t = 0) {
    return new Promise((resolve) => setTimeout(resolve, t));
  }

  s.setup = () => {
    s.createCanvas(512, 512);
    s.background(0);
  };

  s.draw = async () => {
    s.noLoop();

    const truncation = s.map(s.noise(s.frameCount * 0.1), 0, 1, -1.1, 1.1);
    const z = [];
    for (let i = 0; i < 512; i++) {
      z.push(s.map(s.noise(1550 * i + s.frameCount * 0.05), 0, 1, -1, 1));
    }
    const inputs = { z, truncation };
    console.log('::: inputs:', inputs);

    const response = await fetch('http://localhost:8000/query', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    const { image } = await response.json();
    // console.log('::: image:', image);

    delay(3550);
    s.loop();
  };
}, 'p5-main');

window.p5Main = p5Main;
