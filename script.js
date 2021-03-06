var mymap = L.map('mapid').setView([38.6375, -90.285], 15);

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
}).addTo(mymap);


//Layer 1 is Missouri History Museum
var geojsonFeature1 = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5, 
        "name": "Missouri History Museum"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.2866530418396,
              38.64531615885094
            ],
            [
              -90.28663158416747,
              38.64491394131867
            ],
            [
              -90.28611660003662,
              38.64462903586734
            ],
            [
              -90.28560161590576,
              38.64466255421453
            ],
            [
              -90.28527975082396,
              38.64481338658285
            ],
            [
              -90.28502225875854,
              38.64511505036702
            ],
            [
              -90.28502225875854,
              38.6454669898435
            ],
            [
              -90.28534412384033,
              38.64571837412554
            ],
            [
              -90.28577327728271,
              38.64591948091621
            ],
            [
              -90.28635263442993,
              38.64573513304631
            ],
            [
              -90.2866530418396,
              38.64531615885094
            ]
          ]
        ]
      }
    }
  ]
}

var geojsonFeature2 = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5, 
        "name": "St. Louis Zoo Annex"},
      
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.29060125350952,
              38.62983753548499
            ],
            [
              -90.28853058815002,
              38.62962800222483
            ],
            [
              -90.2871572971344,
              38.63020631253559
            ],
            [
              -90.28701782226562,
              38.63084328660972
            ],
            [
              -90.2904188632965,
              38.631161771524575
            ],
            [
              -90.29060125350952,
              38.62983753548499
            ]
          ]
        ]
      }
    }
  ]
}

var geojsonFeature3 = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5, 
        "name": "St. Louis Science Center"},
      
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.27137517929077,
              38.629393324246465
            ],
            [
              -90.27159512042999,
              38.627981049477874
            ],
            [
              -90.27164876461029,
              38.627913997165095
            ],
            [
              -90.27169167995453,
              38.62776312923209
            ],
            [
              -90.27158439159392,
              38.62776312923209
            ],
            [
              -90.27155220508575,
              38.62800200331274
            ],
            [
              -90.27134299278258,
              38.62799781254626
            ],
            [
              -90.27111232280731,
              38.62808581859104
            ],
            [
              -90.27069389820099,
              38.62803552943583
            ],
            [
              -90.27049005031586,
              38.627867898663695
            ],
            [
              -90.2699214220047,
              38.62780084624509
            ],
            [
              -90.26967465877533,
              38.62917540829303
            ],
            [
              -90.2712732553482,
              38.629330463943276
            ],
            [
              -90.27137517929077,
              38.629393324246465
            ]
          ]
        ]
      }
    }
  ]
}

var geojsonFeature4 = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5, 
        "name": "Art Museum"},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.29489278793335,
              38.64003687409856
            ],
            [
              -90.2959656715393,
              38.63879660475989
            ],
            [
              -90.2947211265564,
              38.63782448676131
            ],
            [
              -90.29429197311401,
              38.63767363968331
            ],
            [
              -90.29381990432739,
              38.637757443654735
            ],
            [
              -90.29321908950806,
              38.638344068711156
            ],
            [
              -90.29296159744263,
              38.63884688636671
            ],
            [
              -90.29330492019653,
              38.63896420997878
            ],
            [
              -90.29313325881958,
              38.639182096177386
            ],
            [
              -90.29289722442627,
              38.639182096177386
            ],
            [
              -90.29227495193481,
              38.63933294008071
            ],
            [
              -90.2918028831482,
              38.6395005440454
            ],
            [
              -90.29218912124632,
              38.64060672038247
            ],
            [
              -90.29285430908202,
              38.64075756128745
            ],
            [
              -90.29343366622925,
              38.640975442034154
            ],
            [
              -90.29375553131104,
              38.64152852095478
            ],
            [
              -90.29500007629395,
              38.64152852095478
            ],
            [
              -90.29521465301514,
              38.64119332211848
            ],
            [
              -90.29523611068726,
              38.64053967987835
            ],
            [
              -90.29489278793335,
              38.64003687409856
            ]
          ]
        ]
      }
    }
  ]
}

var geojsonFeature5 = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5, 
        "name": "St. Louis Municipal Opera"},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
        -90.28123497962952,
              38.640682140874645
            ],
            [
              -90.28083801269531,
              38.64018771620289
            ],
            [
              -90.2811062335968,
              38.63998659332658
            ],
            [
              -90.28005480766296,
              38.63895582972713
            ],
            [
              -90.27989387512207,
              38.63895582972713
            ],
            [
              -90.27981877326965,
              38.638863646894464
            ],
            [
              -90.27881026268005,
              38.63941674211205
            ],
            [
              -90.27881026268005,
              38.63950892423334
            ],
            [
              -90.27875661849976,
              38.63964300710722
            ],
            [
              -90.27856349945068,
              38.63966814761814
            ],
            [
              -90.2793788909912,
              38.64056482007473
            ],
            [
              -90.27958273887634,
              38.64064862066571
            ],
            [
              -90.27927160263062,
              38.640816221553656
            ],
            [
              -90.27936816215515,
              38.64121846208558
            ],
            [
              -90.28029084205627,
              38.64130226191224
            ],
            [
              -90.28123497962952,
              38.640682140874645
            ]
          ]
        ]
      }
    }
  ]
}

var geojsonFeature6 = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5, 
        "name": "Norman K. Probstein Golf Course"},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.30060052871704,
              38.64744452237617
            ],
            [
              -90.30087947845459,
              38.64739424680146
            ],
            [
              -90.30096530914307,
              38.64715962698646
            ],
            [
              -90.30102968215942,
              38.64643900417968
            ],
            [
              -90.30126571655273,
              38.64519884563726
            ],
            [
              -90.30251026153564,
              38.64154528085546
            ],
            [
              -90.30261754989624,
              38.64100896209024
            ],
            [
              -90.30287504196167,
              38.63968490795387
            ],
            [
              -90.3031325340271,
              38.63809265856059
            ],
            [
              -90.30272483825682,
              38.63802561570484
            ],
            [
              -90.30229568481445,
              38.63851167498826
            ],
            [
              -90.30173778533934,
              38.63841111126902
            ],
            [
              -90.3011155128479,
              38.638729562562595
            ],
            [
              -90.30014991760254,
              38.63901449146802
            ],
            [
              -90.29950618743896,
              38.63909829387168
            ],
            [
              -90.29806852340698,
              38.638897167938254
            ],
            [
              -90.295729637146,
              38.640489399459106
            ],
            [
              -90.29624462127686,
              38.64119332211848
            ],
            [
              -90.29624462127686,
              38.64174639935767
            ],
            [
              -90.29598712921143,
              38.64234975147789
            ],
            [
              -90.29508590698242,
              38.64214025478961
            ],
            [
              -90.2947747707367,
              38.642291092466905
            ],
            [
              -90.29439926147461,
              38.64234975147789
            ],
            [
              -90.29413104057312,
              38.642299472328574
            ],
            [
              -90.29370188713072,
              38.64195589719731
            ],
            [
              -90.29348731040955,
              38.64239165074208
            ],
            [
              -90.29262900352478,
              38.64219053405065
            ],
            [
              -90.29147028923035,
              38.64326314988284
            ],
            [
              -90.29109477996826,
              38.64312069401714
            ],
            [
              -90.28995752334595,
              38.64253410805701
            ],
            [
              -90.28886318206787,
              38.642215673667934
            ],
            [
              -90.28757572174072,
              38.64234975147789
            ],
            [
              -90.28650283813477,
              38.642869300622145
            ],
            [
              -90.28615951538086,
              38.643338567579455
            ],
            [
              -90.28605222702026,
              38.644528480731736
            ],
            [
              -90.28648138046265,
              38.644729590861886
            ],
            [
              -90.28682470321655,
              38.64496421863367
            ],
            [
              -90.28678178787231,
              38.64538319488683
            ],
            [
              -90.2866530418396,
              38.64571837412554
            ],
            [
              -90.28622388839722,
              38.64605355179642
            ],
            [
              -90.29587984085083,
              38.646992040933945
            ],
            [
              -90.29834747314453,
              38.64722666129771
            ],
            [
              -90.30060052871704,
              38.64744452237617
            ]
          ]
        ]
      }
    }
  ]
}

var geojsonFeature7 = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5, 
        "name": "The Highlands Golf Course"},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.28034448623657,
              38.632997222803255
            ],
            [
              -90.27989387512207,
              38.63313131785833
            ],
            [
              -90.27944326400757,
              38.63323188898502
            ],
            [
              -90.27886390686035,
              38.633365983601124
            ],
            [
              -90.2780270576477,
              38.633365983601124
            ],
            [
              -90.27671813964844,
              38.63326541266257
            ],
            [
              -90.27508735656737,
              38.633097794118086
            ],
            [
              -90.27070999145508,
              38.63272903194067
            ],
            [
              -90.27045249938965,
              38.63351683974442
            ],
            [
              -90.27058124542236,
              38.63393588292127
            ],
            [
              -90.27060270309448,
              38.634606346909216
            ],
            [
              -90.27066707611084,
              38.63526004325987
            ],
            [
              -90.27058124542236,
              38.63584668875551
            ],
            [
              -90.27032375335693,
              38.636567418077526
            ],
            [
              -90.27023792266846,
              38.63708700913979
            ],
            [
              -90.27081727981566,
              38.638142940661254
            ],
            [
              -90.27158975601196,
              38.637975333521865
            ],
            [
              -90.2720832824707,
              38.63777420443724
            ],
            [
              -90.27242660522461,
              38.637371944574866
            ],
            [
              -90.27296304702759,
              38.63681883357796
            ],
            [
              -90.27343511581421,
              38.63645009054217
            ],
            [
              -90.27416467666626,
              38.63621543489537
            ],
            [
              -90.27525901794434,
              38.63609810678392
            ],
            [
              -90.2762246131897,
              38.63609810678392
            ],
            [
              -90.27688980102539,
              38.63614839028378
            ],
            [
              -90.27706146240233,
              38.63589697243174
            ],
            [
              -90.27963638305664,
              38.63420406926894
            ],
            [
              -90.28019428253174,
              38.63388559786938
            ],
            [
              -90.28043031692505,
              38.633466554398595
            ],
            [
              -90.28034448623657,
              38.632997222803255
            ]
          ]
        ]
      }
    }
  ]
}

var geojsonFeature8 = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5, 
        "name": "Boeing Aviation Field"},
       "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.27920722961426,
              38.63086843020705
            ],
            [
              -90.27448654174805,
              38.63053318151737
            ],
            [
              -90.27414321899414,
              38.630667281181395
            ],
            [
              -90.27390718460083,
              38.630901954989824
            ],
            [
              -90.27345657348631,
              38.6328296036317
            ],
            [
              -90.27905702590941,
              38.63321512714036
            ],
            [
              -90.2794861793518,
              38.631321013451455
            ],
            [
              -90.27920722961426,
              38.63086843020705
            ]
          ]
        ]
      }
    }
  ]
}

var geojsonFeature9 = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5, 
        "name": "St. Louis Zoo"},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.29615879058836,
              38.63425435409743
            ],
            [
              -90.29530048370361,
              38.63341626901748
            ],
            [
              -90.29435634613037,
              38.63321512714036
            ],
            [
              -90.2934980392456,
              38.63323188898502
            ],
            [
              -90.29351949691771,
              38.632544650140616
            ],
            [
              -90.29291868209839,
              38.632477602095754
            ],
            [
              -90.29184579849243,
              38.6324105539882
            ],
            [
              -90.29055833816527,
              38.63225969551689
            ],
            [
              -90.28965711593628,
              38.632309981709255
            ],
            [
              -90.28899192810059,
              38.63277931780383
            ],
            [
              -90.28832674026489,
              38.6329134132665
            ],
            [
              -90.28759717941283,
              38.63289665134736
            ],
            [
              -90.28691053390503,
              38.633013984698856
            ],
            [
              -90.28615951538086,
              38.63318160343931
            ],
            [
              -90.28562307357787,
              38.63334922178784
            ],
            [
              -90.28527975082396,
              38.63368445730911
            ],
            [
              -90.28510808944702,
              38.63430463889065
            ],
            [
              -90.28495788574217,
              38.63482424635511
            ],
            [
              -90.28540849685669,
              38.63505890655611
            ],
            [
              -90.28618097305298,
              38.6353606114001
            ],
            [
              -90.28703927993774,
              38.635595269845254
            ],
            [
              -90.28798341751099,
              38.635997539678364
            ],
            [
              -90.28841257095337,
              38.63643332945003
            ],
            [
              -90.2887773513794,
              38.63691939953125
            ],
            [
              -90.2890133857727,
              38.63747250975212
            ],
            [
              -90.28987169265747,
              38.63722109654446
            ],
            [
              -90.29118061065674,
              38.63681883357796
            ],
            [
              -90.29229640960693,
              38.6366009401952
            ],
            [
              -90.29347658157349,
              38.63670150645417
            ],
            [
              -90.29465675354004,
              38.63701996534341
            ],
            [
              -90.29545068740845,
              38.637187574716805
            ],
            [
              -90.29615879058836,
              38.63425435409743
            ]
          ]
        ]
      }
    }
  ]
}

var geojsonFeature10 = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5, 
        "name": "Shakespeare Glen"},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.2922534942627,
              38.63846139314629
            ],
            [
              -90.29208183288574,
              38.63824350475674
            ],
            [
              -90.29186725616454,
              38.63807589785253
            ],
            [
              -90.29154539108275,
              38.637757443654735
            ],
            [
              -90.29098749160767,
              38.63696968245497
            ],
            [
              -90.28907775878906,
              38.63757307478826
            ],
            [
              -90.28927087783813,
              38.63809265856059
            ],
            [
              -90.28950691223145,
              38.6383105474087
            ],
            [
              -90.28993606567383,
              38.63844463252446
            ],
            [
              -90.29038667678833,
              38.63844463252446
            ],
            [
              -90.29088020324706,
              38.63864575972777
            ],
            [
              -90.29111623764038,
              38.638997730975525
            ],
            [
              -90.29150247573853,
              38.63914857526685
            ],
            [
              -90.29193162918091,
              38.638947449474536
            ],
            [
              -90.2922534942627,
              38.63846139314629
            ]
          ]
        ]
      }
    }
  ]
}

var geojsonFeature11 = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5, 
        "name": "Post-Dispatch Lake and Boathouse"},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.28803706169128,
              38.638746323117786
            ],
            [
              -90.2875542640686,
              38.6386373794389
            ],
            [
              -90.28729677200317,
              38.638997730975525
            ],
            [
              -90.28700709342957,
              38.639182096177386
            ],
            [
              -90.28647065162657,
              38.63919885662678
            ],
            [
              -90.28615951538086,
              38.63907315316087
            ],
            [
              -90.28537631034851,
              38.63919885662678
            ],
            [
              -90.28505444526672,
              38.639441882702336
            ],
            [
              -90.28496861457825,
              38.63966814761814
            ],
            [
              -90.2846896648407,
              38.639802230194164
            ],
            [
              -90.28455018997192,
              38.63983575079896
            ],
            [
              -90.28486132621765,
              38.64032179780686
            ],
            [
              -90.28512954711914,
              38.64051453967314
            ],
            [
              -90.28595566749573,
              38.64031341771398
            ],
            [
              -90.28634190559387,
              38.640196096310476
            ],
            [
              -90.28645992279053,
              38.640062014471326
            ],
            [
              -90.28674960136414,
              38.64002849397235
            ],
            [
              -90.28703927993774,
              38.63992793238134
            ],
            [
              -90.28742551803589,
              38.63966814761814
            ],
            [
              -90.28788685798645,
              38.63968490795387
            ],
            [
              -90.28819799423218,
              38.63987765153292
            ],
            [
              -90.28830528259277,
              38.6401541957627
            ],
            [
              -90.28864860534668,
              38.64016257587423
            ],
            [
              -90.2887237071991,
              38.63976870957367
            ],
            [
              -90.28897047042847,
              38.6395256846063
            ],
            [
              -90.28891682624817,
              38.63930779945221
            ],
            [
              -90.28869152069092,
              38.63908153339881
            ],
            [
              -90.28848767280579,
              38.63896420997878
            ],
            [
              -90.28843402862549,
              38.638880407418306
            ],
            [
              -90.28803706169128,
              38.638746323117786
            ]
          ]
        ]
      }
    }
  ]
}

var feat1 = L.geoJSON(geojsonFeature1).addTo(mymap);
 feat1.bindPopup(geojsonFeature1.features[0].properties.name).openPopup();

var feat2 = L.geoJSON(geojsonFeature2).addTo(mymap);
 feat2.bindPopup(geojsonFeature2.features[0].properties.name).openPopup();

var feat3 = L.geoJSON(geojsonFeature3).addTo(mymap);
 feat3.bindPopup(geojsonFeature3.features[0].properties.name).openPopup();

var feat4 = L.geoJSON(geojsonFeature4).addTo(mymap);
 feat4.bindPopup(geojsonFeature4.features[0].properties.name).openPopup();

var feat5 = L.geoJSON(geojsonFeature5).addTo(mymap);
 feat5.bindPopup(geojsonFeature5.features[0].properties.name).openPopup();

var feat6 = L.geoJSON(geojsonFeature6).addTo(mymap);
 feat6.bindPopup(geojsonFeature6.features[0].properties.name).openPopup();

var feat7 = L.geoJSON(geojsonFeature7).addTo(mymap);
 feat7.bindPopup(geojsonFeature7.features[0].properties.name).openPopup();

var feat8 = L.geoJSON(geojsonFeature8).addTo(mymap);
 feat8.bindPopup(geojsonFeature8.features[0].properties.name).openPopup();

var feat9 = L.geoJSON(geojsonFeature9).addTo(mymap);
 feat9.bindPopup(geojsonFeature9.features[0].properties.name).openPopup();

var feat10 = L.geoJSON(geojsonFeature10).addTo(mymap);
 feat10.bindPopup(geojsonFeature10.features[0].properties.name).openPopup();

var feat11 = L.geoJSON(geojsonFeature11).addTo(mymap);
 feat11.bindPopup(geojsonFeature11.features[0].properties.name).openPopup();

//Popups on parks work

//Layer 2 is public transportation
var geojsonFeature12 = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "PublicTransportation": "Skinker"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.30079364776611,
          38.64945551643689
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "PublicTransportation": "Forest Park-DeBaliviere"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.28489351272583,
          38.64789700096098
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "PublicTransportation": "Central West End"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.26252388954163,
          38.636005920275885
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "PublicTransportation": "Red Rocks Station"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.28791904449461,
          38.63387721702395
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "PublicTransportation": "River's Edge Station"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.2919852733612,
          38.63397778710422
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "PublicTransportation": "Skinker at Brookings"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.30117988586426,
          38.64706745470608
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "PublicTransportation": "Skinker at Forsyth"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.3009894490242,
          38.646629634755094
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "PublicTransportation": "Skinker at Forest Park Parkway"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.30094653367996,
          38.648565239570715
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "PublicTransportation": "Pershing at DeBaliviere"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.28475940227509,
          38.64854638652924
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "PublicTransportation": "Pershing at Clara"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.28230249881744,
          38.648309675697334
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "PublicTransportation": "Pershing at Belt"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.27894169092178,
          38.64796403458238
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "PublicTransportation": "Lindell at Lake"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.27114987373352,
          38.644756824481924
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "PublicTransportation": "Kingshighway at Lindell"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.26488155126572,
          38.64431689550637
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "PublicTransportation": "Kingshighway at Laclede"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.26526778936386,
          38.6407533712666
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "PublicTransportation": "Oakland at Kingshighway"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.26525437831879,
          38.62890301241986
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "PublicTransportation": "Oakland at Macklind"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.27373820543288,
          38.62956933280226
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "PublicTransportation": "Oakland at STLCC Forest Park"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.27589201927185,
          38.62974743625817
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "PublicTransportation": "Oakland at Highlander"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.27865201234818,
          38.630216789128625
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "PublicTransportation": "Oakland at Oakview Place"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.28416931629181,
          38.630585564228475
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "PublicTransportation": "Oakland at Hampton"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.28748452663422,
          38.630916622077336
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "PublicTransportation": "Clayton at Hampton"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.28666645288467,
          38.63025869548552
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "PublicTransportation": "Oakland at Art Hill"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.29311448335648,
          38.63146139748836
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "PublicTransportation": "Oakland at Tamm"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.2940908074379,
          38.631723307270164
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "PublicTransportation": "Skinker at Wells"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.3038701415062,
          38.63453301521595
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "PublicTransportation": "Skinker at Southwood"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.30355632305145,
          38.63604991839678
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "PublicTransportation": "Skinker at Northwood"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.30325591564178,
          38.63826236050894
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "PublicTransportation": "Skinker at Arundel Place"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.3033846616745,
          38.639094103753834
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "PublicTransportation": "Skinker at Fauquier"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.30256122350693,
          38.64152642596692
        ]
      }
    }
  ]
}

L.geoJson(geojsonFeature12,{
    pointToLayer: function(feature, latlng){
   return L.marker(latlng);
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup('<h4>'+feature.properties.PublicTransportation+'</h4>');
    }
  }).addTo(mymap);
