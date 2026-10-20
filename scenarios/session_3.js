window.SCENARIO_SESSION3 = {
  secretNotes: {
    session3: {
      title: '高瀬の電子カルテ：小野寺由衣 様（第3回）',
      publicNote: '【主訴】業務繁忙による著しい全身疲労、頚肩腕症候群様の重度筋硬結。\n【所見】睡眠不足・ストレス性交感神経優位。呼吸促迫傾向。\n【内容】本人希望により初回より全身整体・深部筋膜リリース実施。\n【次回】次回は自力ストレッチ中心で負荷を減らし経過観察予定。',
      secretNote: '【裏メモ（非公開）】\n目の下のクマが痛々しいくらい限界の顔で来店。\n入ってくるなり、消え入りそうな声で「今日は……最初から整体をお願いできますか」って自分から頭を下げてきた。\nあのプライドの高い由衣さんが、仕事の鎧を脱いで俺に身を委ねる選択をした決定的な日。\n施術台に上がって、うつ伏せで背中を押した瞬間、溜め込んでた息を全部吐き出すみたいに脱力して体重預けてきた。\n正直、その無防備さに俺の方が動揺した。華奢な背中の熱が手のひらに焼き付いて離れない。\n……これ以上踏み込まれたら、俺のルールが保たなくなるかもしれない。'
    }
  },
  scenes: {
    session3_intro: [
      {
        bg: 'assets/bg_entrance.png',
        chara: null,
        speaker: '',
        text: 'さらに一週間後。ITプロジェクトの納期直前、連日の深夜残業でボロボロになった由衣は、吸い寄せられるようにサロンの扉を開けた。',
        bpm: 88
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'yui',
        face: '04',
        speaker: '由衣',
        text: 'こんにちは……高瀬さん……',
        bpm: 85
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'takase',
        face: '驚き',
        speaker: '高瀬',
        text: 'うわ、顔色……！ 大丈夫ですか由衣さん。目の下にクマできてますよ。今日もガッツリ筋トレします？',
        bpm: 84
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'yui',
        face: '08',
        speaker: '由衣',
        text: 'あの……高瀬さん。今日は……わがままを言ってもいいですか',
        bpm: 96
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'takase',
        face: '真顔',
        speaker: '高瀬',
        text: '……はい、なんですか？',
        bpm: 90
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'yui',
        face: '09',
        speaker: '由衣',
        text: '……今日は、最初から整体を……お願いできますか。もう、一人で立ってるのもつらくて……',
        bpm: 110,
        effect: 'pulse'
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'takase',
        face: '真顔',
        speaker: '高瀬',
        text: '……分かりました。よく言えましたね。奥のベッド、すぐ用意しますから横になって',
        bpm: 95,
        nextScene: 'session3_bed'
      }
    ],

    session3_bed: [
      {
        bg: 'assets/bed.png',
        chara: null,
        speaker: '',
        text: '薄暗い施術スペースのベッドに倒れ込むように横たわると、高瀬の手がそっと頭部から首筋へ触れられた。',
        bpm: 102
      },
      {
        bg: 'assets/bed.png',
        chara: 'takase',
        face: '真顔',
        speaker: '高瀬',
        text: '息吐いて。……全部吐ききって。はい、脱力。……俺に身体預けて',
        bpm: 108
      },
      {
        bg: 'assets/bed.png',
        chara: 'yui',
        face: '10',
        speaker: '',
        text: '（高瀬さんの低い声が降ってくるたびに、強張っていた神経がほどけていく。誰にも頼れなかった重圧が、大きな掌に溶かされていく……）',
        bpm: 120,
        effect: 'pulse'
      },
      {
        bg: 'assets/bed.png',
        chara: 'takase',
        face: '真顔',
        speaker: '',
        text: '高瀬の両手が由衣の肩甲骨を包み込み、深く沈み込む。由衣の細い身体が完全に高瀬の体重と手技に委ねられ、二人の呼吸が静かな室内に重なる。',
        bpm: 125
      },
      {
        bg: 'assets/bed.png',
        chara: 'takase',
        face: '色気',
        speaker: '高瀬',
        text: '……こんなになるまで、誰にも頼らず一人で耐えてたんですね。……もう頑張らなくていいですから',
        bpm: 128,
        effect: 'pulse'
      },
      {
        bg: 'assets/bed.png',
        chara: 'yui',
        face: '07',
        speaker: '由衣',
        text: 'っ……ぅ……高瀬、さん……っ……',
        bpm: 132
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'takase',
        face: '真顔',
        speaker: '',
        text: '施術が終わったあと、高瀬はどこかいつもと違う静かな眼差しで由衣に白湯を手渡した。',
        bpm: 98,
        nextScene: 'session3_end'
      }
    ],

    session3_end: [
      {
        bg: 'assets/bg_entrance.png',
        chara: 'takase',
        face: '笑顔',
        speaker: '高瀬',
        text: '今日は帰ったらすぐ寝てくださいね。……身体、温かくして',
        bpm: 88
      },
      {
        bg: 'assets/title_bg.png',
        chara: 'takase',
        speaker: '',
        text: '【Session 3 終了】\n画面右上の「📋 カルテ」から高瀬の裏カルテ（第3回）を閲覧できます。',
        bpm: 78,
        isSessionEnd: true,
        sessionKey: 'session3',
        nextSessionStart: 'session4_intro'
      }
    ]
  }
};