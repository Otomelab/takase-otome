// ===== 高瀬航 × 小野寺由衣 『店じまいの合図』シナリオデータ =====
window.SCENARIO_DATA = {
  startScene: 'scene_training_end',
  scenes: {
    // --- プロローグ：トレーニング終了と脈の計測 ---
    scene_training_end: [
      {
        bg: 'assets/scene_1.png',
        chara: 'both',
        speaker: '由衣',
        text: '……っ、はぁ……っ、もう無理……足、生まれたての小鹿みたい……',
        bpm: 95,
        effect: 'pulse'
      },
      {
        bg: 'assets/scene_1.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'はい、ラスト3セット終了。お疲れさまです。いい追い込みでしたよ',
        bpm: 98
      },
      {
        bg: 'assets/scene_1.png',
        chara: 'takase',
        speaker: '',
        text: 'タオルを手渡しながら、高瀬の手が由衣の細い手首を何食わぬ顔で包み込んだ。大きな掌の温もりが、橈骨動脈の真上に重なる。',
        bpm: 105,
        effect: 'pulse'
      },
      {
        bg: 'assets/scene_1.png',
        chara: 'takase',
        speaker: '高瀬',
        text: '脈……全然落ちないっすね。さっきのスクワットの負荷、もう抜けてるはずなのに',
        bpm: 110
      },
      {
        bg: 'assets/scene_1.png',
        chara: 'yui',
        speaker: '由衣',
        text: '……い、息上がってるから……当たり前です。手、離してください……',
        bpm: 115
      },
      {
        bg: 'assets/scene_1.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'いや。心拍のリズムが違います。胸の奥、めちゃくちゃ速く跳ねてる',
        bpm: 120,
        effect: 'pulse'
      },
      {
        bg: 'assets/takase_main.png',
        chara: 'takase',
        speaker: '高瀬',
        text: '……今日はこれで店じまいだから。奥のベッド、行きましょうか',
        bpm: 122,
        choices: [
          { text: '素直に奥のベッドへ向かう', target: 'scene_bed_obedient' },
          { text: '「今日はもう帰ります」と抵抗する', target: 'scene_bed_resist' }
        ]
      }
    ],

    // 分岐A：素直に従う
    scene_bed_obedient: [
      {
        bg: 'assets/scene_2.png',
        chara: 'takase',
        speaker: '',
        text: 'フロアの照明を半分落とし、入口の自動ドアを内側からガチャリと施錠する金属音が静かな店内に小さく響いた。',
        bpm: 118,
        effect: 'pulse'
      },
      {
        bg: 'assets/scene_2.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'いい子。素直なクライアントは嫌いじゃないですよ',
        bpm: 122
      },
      {
        bg: 'assets/scene_2.png',
        chara: null,
        speaker: '',
        text: '施術台にうつ伏せになり、サロン貸出の薄いTシャツ越しに背中を預ける。高瀬の厚みのある両手が、肩甲骨から腰のくびれへと滑り落ちてきた。',
        bpm: 125,
        nextScene: 'scene_massage_deep'
      }
    ],

    // 分岐B：抵抗する
    scene_bed_resist: [
      {
        bg: 'assets/scene_2.png',
        chara: 'takase',
        speaker: '由衣',
        text: '今日はもうシャワー浴びて帰ります……！　整体は次回で……',
        bpm: 120
      },
      {
        bg: 'assets/scene_2.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'ダメです。乳酸溜まったまま帰したらトレーナーの名折れなんで',
        bpm: 125
      },
      {
        bg: 'assets/scene_2.png',
        chara: 'takase',
        speaker: '',
        text: 'ガチャリ、と無慈悲に施錠されたエントランス。高瀬は由衣の腰を両手で軽く抱き上げ、そのまま施術ベッドへと押し倒した。',
        bpm: 130,
        effect: 'flash',
        nextScene: 'scene_massage_deep'
      }
    ],

    // --- 施術ベッドでの密着アプローチ ---
    scene_massage_deep: [
      {
        bg: 'assets/scene_2.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'ここ、まだ力抜けてない。……息吐いて。力抜かないと奥まで指が入らない',
        bpm: 125
      },
      {
        bg: 'assets/scene_2.png',
        chara: 'yui',
        speaker: '由衣',
        text: 'あっ……んっ……！　そこ、痛い……っ',
        bpm: 128,
        effect: 'pulse'
      },
      {
        bg: 'assets/scene_2.png',
        chara: 'takase',
        speaker: '高瀬',
        text: '痛いのは最初だけ。……ほら、Tシャツめくりますよ。素肌の熱、直で確かめたいんで',
        bpm: 132
      },
      {
        bg: 'assets/scene_3.png',
        chara: null,
        speaker: '',
        text: '薄い生地が捲り上げられ、冷房の風のあと、高瀬の熱を帯びた指先が直接素肌に触れる。腰骨から内腿の付け根へ、迷いなく指が這う。',
        bpm: 135,
        effect: 'pulse'
      },
      {
        bg: 'assets/scene_3.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'ハーフパンツのゴム、緩めますね。……筋肉の起始部を緩めるだけですから。',
        bpm: 138,
        choices: [
          { text: '「高瀬さん、そこはダメ……っ」とすがる', target: 'scene_climax_a' },
          { text: '声が出ないままシーツを強く握りしめる', target: 'scene_climax_b' }
        ]
      }
    ],

    // クライマックスA
    scene_climax_a: [
      {
        bg: 'assets/scene_3.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'ダメ？　どこがダメなんですか？　こんなに身体、熱くして欲しがってるのに',
        bpm: 142,
        effect: 'pulse'
      },
      {
        bg: 'assets/scene_3.png',
        chara: 'takase',
        speaker: '高瀬',
        text: '……ゆいぴー。力抜いて。全部こっちで支えてやるから',
        bpm: 145,
        effect: 'flash',
        nextScene: 'scene_ending'
      }
    ],

    // クライマックスB
    scene_climax_b: [
      {
        bg: 'assets/scene_3.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'シーツ握らないの。爪割れちゃうでしょ。……ほら、俺の手を握って',
        bpm: 142,
        effect: 'pulse'
      },
      {
        bg: 'assets/scene_3.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'ゆいぴー。……もう誤魔化せないよ。一番奥まで、全部教えて',
        bpm: 145,
        effect: 'flash',
        nextScene: 'scene_ending'
      }
    ],

    // --- エンディング ---
    scene_ending: [
      {
        bg: 'assets/scene_3.png',
        chara: null,
        speaker: '',
        text: '耳元に落ちてきた低音の吐息と、最深部を満たす圧倒的な質量。逃げ場のない施術ベッドの上で、由衣は男の腕の中にすべてを委ねた。',
        bpm: 150,
        effect: 'pulse'
      },
      {
        bg: 'assets/scene_3.png',
        chara: 'takase',
        speaker: '高瀬',
        text: '……よく頑張りました。今日の特別メニュー、これで終了です。……由衣さん',
        bpm: 110
      },
      {
        bg: 'assets/takase_main.png',
        chara: 'takase',
        speaker: '',
        text: '【特別セッション 終了】
画面をタップするとタイトル画面に戻ります。',
        bpm: 82,
        isEnd: true
      }
    ]
  }
};
