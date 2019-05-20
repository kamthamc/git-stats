/*
https://next.json-generator.com/Nys8lfs2I

[
  {
    'repeat(5, 10)': {
      id: '{{guid()}}',
      repo: {
        repoId: function(tags, parent, index) {
          return parent.id;
        },
        isPublic: '{{bool()}}',
        name: '{{lorem(1, "words")}}',
        lastUpdated: '{{moment(this.date(new Date(2014, 0, 1), new Date())).valueOf()}}',
      },
      stats: [{
        'repeat(30, 30)': {
          date: function(tags, parent, index) {
            return moment().add(-index, 'day').valueOf();
          },
          managedDevices: '{{integer(0, 1000)}}',
          unmanagedDevices: '{{integer(0, 1000)}}',
        }
      }]
    }
  },

]
 */


export const repos = [
  {
    "id": "c8746c88-647b-4682-a8d4-5c928121dcc1",
    "repo": {
      "repoId": "c8746c88-647b-4682-a8d4-5c928121dcc1",
      "isPublic": false,
      "name": "sunt",
      "lastUpdated": 1547858347817
    },
    "stats": [
      {
        "date": 1558323515350,
        "managedDevices": 5,
        "unmanagedDevices": 505
      },
      {
        "date": 1558237115351,
        "managedDevices": 770,
        "unmanagedDevices": 954
      },
      {
        "date": 1558150715352,
        "managedDevices": 52,
        "unmanagedDevices": 33
      },
      {
        "date": 1558064315352,
        "managedDevices": 40,
        "unmanagedDevices": 188
      },
      {
        "date": 1557977915352,
        "managedDevices": 831,
        "unmanagedDevices": 862
      },
      {
        "date": 1557891515352,
        "managedDevices": 588,
        "unmanagedDevices": 202
      },
      {
        "date": 1557805115352,
        "managedDevices": 313,
        "unmanagedDevices": 935
      },
      {
        "date": 1557718715352,
        "managedDevices": 867,
        "unmanagedDevices": 155
      },
      {
        "date": 1557632315352,
        "managedDevices": 446,
        "unmanagedDevices": 422
      },
      {
        "date": 1557545915352,
        "managedDevices": 306,
        "unmanagedDevices": 228
      },
      {
        "date": 1557459515352,
        "managedDevices": 7,
        "unmanagedDevices": 451
      },
      {
        "date": 1557373115352,
        "managedDevices": 856,
        "unmanagedDevices": 602
      },
      {
        "date": 1557286715353,
        "managedDevices": 205,
        "unmanagedDevices": 861
      },
      {
        "date": 1557200315353,
        "managedDevices": 946,
        "unmanagedDevices": 297
      },
      {
        "date": 1557113915353,
        "managedDevices": 843,
        "unmanagedDevices": 116
      },
      {
        "date": 1557027515353,
        "managedDevices": 361,
        "unmanagedDevices": 870
      },
      {
        "date": 1556941115353,
        "managedDevices": 953,
        "unmanagedDevices": 600
      },
      {
        "date": 1556854715353,
        "managedDevices": 39,
        "unmanagedDevices": 288
      },
      {
        "date": 1556768315353,
        "managedDevices": 973,
        "unmanagedDevices": 613
      },
      {
        "date": 1556681915353,
        "managedDevices": 204,
        "unmanagedDevices": 861
      },
      {
        "date": 1556595515353,
        "managedDevices": 520,
        "unmanagedDevices": 488
      },
      {
        "date": 1556509115353,
        "managedDevices": 536,
        "unmanagedDevices": 34
      },
      {
        "date": 1556422715353,
        "managedDevices": 766,
        "unmanagedDevices": 85
      },
      {
        "date": 1556336315353,
        "managedDevices": 302,
        "unmanagedDevices": 522
      },
      {
        "date": 1556249915353,
        "managedDevices": 14,
        "unmanagedDevices": 363
      },
      {
        "date": 1556163515353,
        "managedDevices": 681,
        "unmanagedDevices": 120
      },
      {
        "date": 1556077115353,
        "managedDevices": 543,
        "unmanagedDevices": 12
      },
      {
        "date": 1555990715354,
        "managedDevices": 730,
        "unmanagedDevices": 548
      },
      {
        "date": 1555904315354,
        "managedDevices": 933,
        "unmanagedDevices": 530
      },
      {
        "date": 1555817915354,
        "managedDevices": 382,
        "unmanagedDevices": 365
      }
    ]
  },
  {
    "id": "42981ec4-2d70-4309-a080-e1b34083c031",
    "repo": {
      "repoId": "42981ec4-2d70-4309-a080-e1b34083c031",
      "isPublic": true,
      "name": "sunt",
      "lastUpdated": 1457243261310
    },
    "stats": [
      {
        "date": 1558323515355,
        "managedDevices": 549,
        "unmanagedDevices": 343
      },
      {
        "date": 1558237115355,
        "managedDevices": 451,
        "unmanagedDevices": 818
      },
      {
        "date": 1558150715355,
        "managedDevices": 847,
        "unmanagedDevices": 27
      },
      {
        "date": 1558064315355,
        "managedDevices": 58,
        "unmanagedDevices": 983
      },
      {
        "date": 1557977915355,
        "managedDevices": 689,
        "unmanagedDevices": 463
      },
      {
        "date": 1557891515355,
        "managedDevices": 408,
        "unmanagedDevices": 813
      },
      {
        "date": 1557805115356,
        "managedDevices": 221,
        "unmanagedDevices": 251
      },
      {
        "date": 1557718715356,
        "managedDevices": 328,
        "unmanagedDevices": 728
      },
      {
        "date": 1557632315356,
        "managedDevices": 83,
        "unmanagedDevices": 38
      },
      {
        "date": 1557545915356,
        "managedDevices": 64,
        "unmanagedDevices": 618
      },
      {
        "date": 1557459515356,
        "managedDevices": 554,
        "unmanagedDevices": 676
      },
      {
        "date": 1557373115356,
        "managedDevices": 635,
        "unmanagedDevices": 847
      },
      {
        "date": 1557286715356,
        "managedDevices": 111,
        "unmanagedDevices": 579
      },
      {
        "date": 1557200315356,
        "managedDevices": 597,
        "unmanagedDevices": 304
      },
      {
        "date": 1557113915356,
        "managedDevices": 936,
        "unmanagedDevices": 781
      },
      {
        "date": 1557027515356,
        "managedDevices": 488,
        "unmanagedDevices": 29
      },
      {
        "date": 1556941115356,
        "managedDevices": 147,
        "unmanagedDevices": 579
      },
      {
        "date": 1556854715356,
        "managedDevices": 666,
        "unmanagedDevices": 606
      },
      {
        "date": 1556768315356,
        "managedDevices": 886,
        "unmanagedDevices": 148
      },
      {
        "date": 1556681915356,
        "managedDevices": 995,
        "unmanagedDevices": 405
      },
      {
        "date": 1556595515356,
        "managedDevices": 345,
        "unmanagedDevices": 736
      },
      {
        "date": 1556509115356,
        "managedDevices": 28,
        "unmanagedDevices": 528
      },
      {
        "date": 1556422715409,
        "managedDevices": 230,
        "unmanagedDevices": 541
      },
      {
        "date": 1556336315409,
        "managedDevices": 887,
        "unmanagedDevices": 605
      },
      {
        "date": 1556249915409,
        "managedDevices": 516,
        "unmanagedDevices": 307
      },
      {
        "date": 1556163515409,
        "managedDevices": 252,
        "unmanagedDevices": 534
      },
      {
        "date": 1556077115409,
        "managedDevices": 469,
        "unmanagedDevices": 992
      },
      {
        "date": 1555990715409,
        "managedDevices": 94,
        "unmanagedDevices": 667
      },
      {
        "date": 1555904315409,
        "managedDevices": 626,
        "unmanagedDevices": 865
      },
      {
        "date": 1555817915409,
        "managedDevices": 645,
        "unmanagedDevices": 492
      }
    ]
  },
  {
    "id": "3002e7df-ce25-4ede-a06f-a41741eb4112",
    "repo": {
      "repoId": "3002e7df-ce25-4ede-a06f-a41741eb4112",
      "isPublic": true,
      "name": "quis",
      "lastUpdated": 1391246602411
    },
    "stats": [
      {
        "date": 1558323515410,
        "managedDevices": 965,
        "unmanagedDevices": 492
      },
      {
        "date": 1558237115410,
        "managedDevices": 55,
        "unmanagedDevices": 370
      },
      {
        "date": 1558150715410,
        "managedDevices": 444,
        "unmanagedDevices": 472
      },
      {
        "date": 1558064315410,
        "managedDevices": 888,
        "unmanagedDevices": 214
      },
      {
        "date": 1557977915410,
        "managedDevices": 436,
        "unmanagedDevices": 256
      },
      {
        "date": 1557891515410,
        "managedDevices": 198,
        "unmanagedDevices": 978
      },
      {
        "date": 1557805115410,
        "managedDevices": 65,
        "unmanagedDevices": 755
      },
      {
        "date": 1557718715410,
        "managedDevices": 239,
        "unmanagedDevices": 831
      },
      {
        "date": 1557632315410,
        "managedDevices": 234,
        "unmanagedDevices": 313
      },
      {
        "date": 1557545915410,
        "managedDevices": 558,
        "unmanagedDevices": 695
      },
      {
        "date": 1557459515410,
        "managedDevices": 813,
        "unmanagedDevices": 943
      },
      {
        "date": 1557373115410,
        "managedDevices": 1000,
        "unmanagedDevices": 866
      },
      {
        "date": 1557286715410,
        "managedDevices": 700,
        "unmanagedDevices": 250
      },
      {
        "date": 1557200315410,
        "managedDevices": 120,
        "unmanagedDevices": 894
      },
      {
        "date": 1557113915410,
        "managedDevices": 50,
        "unmanagedDevices": 620
      },
      {
        "date": 1557027515413,
        "managedDevices": 677,
        "unmanagedDevices": 342
      },
      {
        "date": 1556941115413,
        "managedDevices": 207,
        "unmanagedDevices": 679
      },
      {
        "date": 1556854715413,
        "managedDevices": 779,
        "unmanagedDevices": 31
      },
      {
        "date": 1556768315413,
        "managedDevices": 151,
        "unmanagedDevices": 578
      },
      {
        "date": 1556681915413,
        "managedDevices": 337,
        "unmanagedDevices": 895
      },
      {
        "date": 1556595515413,
        "managedDevices": 165,
        "unmanagedDevices": 675
      },
      {
        "date": 1556509115413,
        "managedDevices": 615,
        "unmanagedDevices": 424
      },
      {
        "date": 1556422715413,
        "managedDevices": 73,
        "unmanagedDevices": 840
      },
      {
        "date": 1556336315414,
        "managedDevices": 529,
        "unmanagedDevices": 412
      },
      {
        "date": 1556249915414,
        "managedDevices": 746,
        "unmanagedDevices": 930
      },
      {
        "date": 1556163515414,
        "managedDevices": 257,
        "unmanagedDevices": 787
      },
      {
        "date": 1556077115414,
        "managedDevices": 474,
        "unmanagedDevices": 49
      },
      {
        "date": 1555990715414,
        "managedDevices": 216,
        "unmanagedDevices": 439
      },
      {
        "date": 1555904315414,
        "managedDevices": 852,
        "unmanagedDevices": 967
      },
      {
        "date": 1555817915414,
        "managedDevices": 120,
        "unmanagedDevices": 109
      }
    ]
  },
  {
    "id": "ac8fa302-f1c0-4699-ab86-b22fe754cd6b",
    "repo": {
      "repoId": "ac8fa302-f1c0-4699-ab86-b22fe754cd6b",
      "isPublic": false,
      "name": "consequat",
      "lastUpdated": 1535033731616
    },
    "stats": [
      {
        "date": 1558323515414,
        "managedDevices": 729,
        "unmanagedDevices": 691
      },
      {
        "date": 1558237115414,
        "managedDevices": 297,
        "unmanagedDevices": 371
      },
      {
        "date": 1558150715414,
        "managedDevices": 17,
        "unmanagedDevices": 859
      },
      {
        "date": 1558064315414,
        "managedDevices": 158,
        "unmanagedDevices": 307
      },
      {
        "date": 1557977915414,
        "managedDevices": 390,
        "unmanagedDevices": 624
      },
      {
        "date": 1557891515415,
        "managedDevices": 980,
        "unmanagedDevices": 648
      },
      {
        "date": 1557805115415,
        "managedDevices": 606,
        "unmanagedDevices": 647
      },
      {
        "date": 1557718715415,
        "managedDevices": 560,
        "unmanagedDevices": 348
      },
      {
        "date": 1557632315415,
        "managedDevices": 969,
        "unmanagedDevices": 914
      },
      {
        "date": 1557545915416,
        "managedDevices": 141,
        "unmanagedDevices": 775
      },
      {
        "date": 1557459515416,
        "managedDevices": 280,
        "unmanagedDevices": 281
      },
      {
        "date": 1557373115416,
        "managedDevices": 461,
        "unmanagedDevices": 369
      },
      {
        "date": 1557286715416,
        "managedDevices": 21,
        "unmanagedDevices": 348
      },
      {
        "date": 1557200315416,
        "managedDevices": 571,
        "unmanagedDevices": 214
      },
      {
        "date": 1557113915417,
        "managedDevices": 86,
        "unmanagedDevices": 947
      },
      {
        "date": 1557027515417,
        "managedDevices": 970,
        "unmanagedDevices": 831
      },
      {
        "date": 1556941115417,
        "managedDevices": 163,
        "unmanagedDevices": 75
      },
      {
        "date": 1556854715417,
        "managedDevices": 3,
        "unmanagedDevices": 625
      },
      {
        "date": 1556768315417,
        "managedDevices": 575,
        "unmanagedDevices": 734
      },
      {
        "date": 1556681915417,
        "managedDevices": 230,
        "unmanagedDevices": 924
      },
      {
        "date": 1556595515417,
        "managedDevices": 918,
        "unmanagedDevices": 129
      },
      {
        "date": 1556509115417,
        "managedDevices": 406,
        "unmanagedDevices": 283
      },
      {
        "date": 1556422715417,
        "managedDevices": 675,
        "unmanagedDevices": 859
      },
      {
        "date": 1556336315417,
        "managedDevices": 994,
        "unmanagedDevices": 534
      },
      {
        "date": 1556249915417,
        "managedDevices": 315,
        "unmanagedDevices": 62
      },
      {
        "date": 1556163515417,
        "managedDevices": 431,
        "unmanagedDevices": 54
      },
      {
        "date": 1556077115417,
        "managedDevices": 134,
        "unmanagedDevices": 738
      },
      {
        "date": 1555990715417,
        "managedDevices": 223,
        "unmanagedDevices": 788
      },
      {
        "date": 1555904315418,
        "managedDevices": 909,
        "unmanagedDevices": 630
      },
      {
        "date": 1555817915418,
        "managedDevices": 436,
        "unmanagedDevices": 398
      }
    ]
  },
  {
    "id": "a38aeba4-b369-42d3-a8aa-baa0cfe862c0",
    "repo": {
      "repoId": "a38aeba4-b369-42d3-a8aa-baa0cfe862c0",
      "isPublic": true,
      "name": "id",
      "lastUpdated": 1418157891982
    },
    "stats": [
      {
        "date": 1558323515418,
        "managedDevices": 727,
        "unmanagedDevices": 958
      },
      {
        "date": 1558237115418,
        "managedDevices": 643,
        "unmanagedDevices": 226
      },
      {
        "date": 1558150715419,
        "managedDevices": 576,
        "unmanagedDevices": 323
      },
      {
        "date": 1558064315419,
        "managedDevices": 605,
        "unmanagedDevices": 942
      },
      {
        "date": 1557977915419,
        "managedDevices": 425,
        "unmanagedDevices": 761
      },
      {
        "date": 1557891515419,
        "managedDevices": 119,
        "unmanagedDevices": 565
      },
      {
        "date": 1557805115419,
        "managedDevices": 313,
        "unmanagedDevices": 154
      },
      {
        "date": 1557718715419,
        "managedDevices": 595,
        "unmanagedDevices": 401
      },
      {
        "date": 1557632315419,
        "managedDevices": 287,
        "unmanagedDevices": 612
      },
      {
        "date": 1557545915419,
        "managedDevices": 968,
        "unmanagedDevices": 450
      },
      {
        "date": 1557459515419,
        "managedDevices": 835,
        "unmanagedDevices": 282
      },
      {
        "date": 1557373115419,
        "managedDevices": 253,
        "unmanagedDevices": 288
      },
      {
        "date": 1557286715419,
        "managedDevices": 754,
        "unmanagedDevices": 105
      },
      {
        "date": 1557200315419,
        "managedDevices": 856,
        "unmanagedDevices": 839
      },
      {
        "date": 1557113915420,
        "managedDevices": 95,
        "unmanagedDevices": 741
      },
      {
        "date": 1557027515420,
        "managedDevices": 80,
        "unmanagedDevices": 979
      },
      {
        "date": 1556941115420,
        "managedDevices": 891,
        "unmanagedDevices": 734
      },
      {
        "date": 1556854715420,
        "managedDevices": 479,
        "unmanagedDevices": 50
      },
      {
        "date": 1556768315420,
        "managedDevices": 950,
        "unmanagedDevices": 895
      },
      {
        "date": 1556681915420,
        "managedDevices": 663,
        "unmanagedDevices": 264
      },
      {
        "date": 1556595515420,
        "managedDevices": 66,
        "unmanagedDevices": 318
      },
      {
        "date": 1556509115420,
        "managedDevices": 197,
        "unmanagedDevices": 439
      },
      {
        "date": 1556422715420,
        "managedDevices": 501,
        "unmanagedDevices": 280
      },
      {
        "date": 1556336315420,
        "managedDevices": 305,
        "unmanagedDevices": 246
      },
      {
        "date": 1556249915420,
        "managedDevices": 770,
        "unmanagedDevices": 744
      },
      {
        "date": 1556163515420,
        "managedDevices": 113,
        "unmanagedDevices": 32
      },
      {
        "date": 1556077115420,
        "managedDevices": 112,
        "unmanagedDevices": 687
      },
      {
        "date": 1555990715420,
        "managedDevices": 547,
        "unmanagedDevices": 260
      },
      {
        "date": 1555904315421,
        "managedDevices": 777,
        "unmanagedDevices": 275
      },
      {
        "date": 1555817915421,
        "managedDevices": 997,
        "unmanagedDevices": 484
      }
    ]
  },
  {
    "id": "faf60a65-71f4-4f63-916f-db878aa5e53a",
    "repo": {
      "repoId": "faf60a65-71f4-4f63-916f-db878aa5e53a",
      "isPublic": false,
      "name": "deserunt",
      "lastUpdated": 1532552038469
    },
    "stats": [
      {
        "date": 1558323515421,
        "managedDevices": 655,
        "unmanagedDevices": 225
      },
      {
        "date": 1558237115421,
        "managedDevices": 745,
        "unmanagedDevices": 665
      },
      {
        "date": 1558150715421,
        "managedDevices": 331,
        "unmanagedDevices": 170
      },
      {
        "date": 1558064315421,
        "managedDevices": 669,
        "unmanagedDevices": 902
      },
      {
        "date": 1557977915421,
        "managedDevices": 451,
        "unmanagedDevices": 22
      },
      {
        "date": 1557891515422,
        "managedDevices": 77,
        "unmanagedDevices": 910
      },
      {
        "date": 1557805115422,
        "managedDevices": 935,
        "unmanagedDevices": 173
      },
      {
        "date": 1557718715422,
        "managedDevices": 794,
        "unmanagedDevices": 399
      },
      {
        "date": 1557632315422,
        "managedDevices": 299,
        "unmanagedDevices": 129
      },
      {
        "date": 1557545915422,
        "managedDevices": 521,
        "unmanagedDevices": 872
      },
      {
        "date": 1557459515422,
        "managedDevices": 45,
        "unmanagedDevices": 24
      },
      {
        "date": 1557373115422,
        "managedDevices": 588,
        "unmanagedDevices": 592
      },
      {
        "date": 1557286715422,
        "managedDevices": 928,
        "unmanagedDevices": 613
      },
      {
        "date": 1557200315422,
        "managedDevices": 163,
        "unmanagedDevices": 126
      },
      {
        "date": 1557113915422,
        "managedDevices": 98,
        "unmanagedDevices": 326
      },
      {
        "date": 1557027515422,
        "managedDevices": 76,
        "unmanagedDevices": 876
      },
      {
        "date": 1556941115422,
        "managedDevices": 389,
        "unmanagedDevices": 953
      },
      {
        "date": 1556854715422,
        "managedDevices": 178,
        "unmanagedDevices": 663
      },
      {
        "date": 1556768315422,
        "managedDevices": 487,
        "unmanagedDevices": 608
      },
      {
        "date": 1556681915422,
        "managedDevices": 830,
        "unmanagedDevices": 401
      },
      {
        "date": 1556595515423,
        "managedDevices": 1000,
        "unmanagedDevices": 639
      },
      {
        "date": 1556509115423,
        "managedDevices": 348,
        "unmanagedDevices": 517
      },
      {
        "date": 1556422715423,
        "managedDevices": 381,
        "unmanagedDevices": 106
      },
      {
        "date": 1556336315423,
        "managedDevices": 159,
        "unmanagedDevices": 329
      },
      {
        "date": 1556249915423,
        "managedDevices": 97,
        "unmanagedDevices": 547
      },
      {
        "date": 1556163515423,
        "managedDevices": 255,
        "unmanagedDevices": 64
      },
      {
        "date": 1556077115423,
        "managedDevices": 956,
        "unmanagedDevices": 955
      },
      {
        "date": 1555990715423,
        "managedDevices": 626,
        "unmanagedDevices": 201
      },
      {
        "date": 1555904315423,
        "managedDevices": 335,
        "unmanagedDevices": 741
      },
      {
        "date": 1555817915423,
        "managedDevices": 51,
        "unmanagedDevices": 590
      }
    ]
  }
];