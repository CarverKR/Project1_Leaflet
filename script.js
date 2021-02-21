var mymap = L.map('mapid').setView([38.6375, -90.285], 15);

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
}).addTo(mymap);


//Layer 1 is parks
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
        "name": "Forest Park"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.30426979064941,
              38.6326955080123
            ],
            [
              -90.29173851013184,
              38.631622734027125
            ],
            [
              -90.28092384338379,
              38.63048289407872
            ],
            [
              -90.26487350463867,
              38.62907483147576
            ],
            [
              -90.26564598083496,
              38.63048289407872
            ],
            [
              -90.26633262634277,
              38.631689782871504
            ],
            [
              -90.26667594909668,
              38.6326955080123
            ],
            [
              -90.26684761047363,
              38.63410349950614
            ],
            [
              -90.26684761047363,
              38.63490805365795
            ],
            [
              -90.26530265808105,
              38.64389162826271
            ],
            [
              -90.27482986450195,
              38.64496421863367
            ],
            [
              -90.3010082244873,
              38.64751155642089
            ],
            [
              -90.30126571655273,
              38.64469607254604
            ],
            [
              -90.30238151550292,
              38.642215673667934
            ],
            [
              -90.30263900756836,
              38.640941921962394
            ],
            [
              -90.30426979064941,
              38.6326955080123
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

var feat1 = L.geoJSON(geojsonFeature1).addTo(mymap);
 feat1.bindPopup(geojsonFeature1.features[0].properties.name).openPopup();

var feat2 = L.geoJSON(geojsonFeature2).addTo(mymap);
 feat2.bindPopup(geojsonFeature2.features[0].properties.name).openPopup();

var feat3 = L.geoJSON(geojsonFeature3).addTo(mymap);
 feat3.bindPopup(geojsonFeature3.features[0].properties.name).openPopup();

//Popups on parks work

//Layer 2 is public transportation
var geojsonFeature4 = {
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

var feat4 = L.geoJSON(geojsonFeature4).addTo(mymap);

var i;
    for (i = 0; i < amount; i++) {

    var marker = L.marker[geojsonFeature4.features[i].geometry.coordinates].addTo(mymap); 
      
marker.bindPopup(geojsonFeature4.features[i].properties.PublicTransportation).openPopup();
    }

//Popups for loop on public transportation does not work
