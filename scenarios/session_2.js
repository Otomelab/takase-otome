window.SCENARIO_SESSION2 = {
  secretNotes: {
    session2: {
      title: '高瀬の電子カルテ：小野寺由衣 様（第2回）',
      publicNote: '【主訴】初回後の大腿四頭筋・殿筋群の強い筋肉痛。背部筋緊張。\n【所見】骨盤前傾の代償動作あり。脊柱起立筋の過緊張。\n【内容】スクワットフォーム再修正（徒手支持）、骨盤安定化ストレッチ、背部押圧ほぐし。\n【次回】筋肉痛の経過確認。疲労度に応じて整体配分調整。',
      secretNote: '【裏メモ（非公開）】\n筋肉痛で生まれたての小鹿みたいに足引きずって再訪。「今日もトレーニングで」って意地張るから笑いそうになった。\nフォーム崩れて後ろから骨盤と腰支えた瞬間、ビクッて背中跳ねて息呑んでる。服の上からでも体温上がったの全部分かる。\n「触られたら困る理由あります？」なんて踏み込むのは昔の俺の悪い癖。客が自分で境界線を越えてくるまで、俺からは絶対に動かない。\n整体ベッドで肩甲骨から腰まで流したら、声殺してシーツ握りしめてた。完全に限界近いはず。'
    }
  },
  scenes: {
    session2_intro: [
      {
        bg: 'assets/bg_entrance.png',
        chara: null,
        speaker: '',
        text: '初回から数日後。階段を降りるたびに悲鳴を上げる太ももを抱え、由衣は再び雑居ビルの扉の前に立っていた。',
        bpm: 82
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'yui',
        face: '07',
        speaker: '由衣',
        text: '（……すごい筋肉痛。歩くのもやっとなくらいなのに、どうしてLINEで空き枠を聞いちゃったんだろう……）',
        bpm: 85
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'takase',
        face: '笑顔',
        speaker: '高瀬',
        text: 'あ、由衣さんいらっしゃい。……お、歩き方ぎこちないですね。筋肉痛、ガッツリ来ました？',
        bpm: 86
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'yui',
        face: '06',
        speaker: '由衣',
        text: '階段が……地獄でした。でも、せっかく始めたんだから間を空けちゃダメだと思って……今日も、トレーニングをお願いします',
        bpm: 88
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'takase',
        face: '真顔',
        speaker: '高瀬',
        text: '真面目ですねえ。職場のプロジェクトでもそうやって無理して背負い込んでるんじゃないですか？ ま、いいですよ。今日はフォームの修正中心でいきましょうか',
        bpm: 86,
        nextScene: 'session2_training'
      }
    ],

    session2_training: [
      {
        bg: 'assets/bg_training.png',
        chara: 'takase',
        face: '真顔',
        speaker: '高瀬',
        text: 'じゃあバーを持たずに自重でスクワット。……あ、ほら。太もも痛いからって腰が引けて骨盤寝てます',
        bpm: 92
      },
      {
        bg: 'assets/bg_training.png',
        chara: null,
        speaker: '',
        text: '高瀬がスッと由衣の背後に回り込み、大きな掌が由衣の腰骨の両脇に添えられた。ウェア越しに熱い体温が伝わってくる。',
        bpm: 105,
        effect: 'pulse'
      },
      {
        bg: 'assets/bg_training.png',
        chara: 'yui',
        face: '08',
        speaker: '由衣',
        text: 'っ……！？ 高瀬、さん……っ',
        bpm: 115
      },
      {
        bg: 'assets/bg_training.png',
        chara: 'takase',
        face: '真顔',
        speaker: '高瀬',
        text: '逃げない。骨盤ここ。俺の手のひらごと押し返すイメージで沈んで。……そう、ここです',
        bpm: 118
      },
      {
        bg: 'assets/bg_training.png',
        chara: 'yui',
        face: '11',
        speaker: '',
        text: '（腰を掴まれた場所から、熱が身体の奥へ伝わってくる。職場で男の子たちを仕切っている時の自分が嘘みたいに、言われるがまま身体を預けてしまう……）',
        bpm: 122,
        effect: 'pulse'
      },
      {
        bg: 'assets/bg_training.png',
        chara: 'takase',
        face: '笑顔',
        speaker: '高瀬',
        text: 'はい、オッケー！ よく踏ん張りました。……でも、背中から腰までガチガチですね。このまま帰すのはトレーナーとして見過ごせないんで、奥のベッドで少しほぐしますよ',
        bpm: 110,
        nextScene: 'session2_bed'
      }
    ],

    session2_bed: [
      {
        bg: 'assets/bed.png',
        chara: 'takase',
        face: '真顔',
        speaker: '高瀬',
        text: 'うつ伏せになって深呼吸してください。……力抜いて。仕事のこと、今は全部置いてきていいですから',
        bpm: 105
      },
      {
        bg: 'assets/bed.png',
        chara: null,
        speaker: '',
        text: '高瀬の重みのある親指が、由衣の肩甲骨の内側から脊柱起立筋へ深く沈み込む。痛気持ちいい刺激に、思わず甘い吐息がシーツに零れそうになる。',
        bpm: 120,
        effect: 'pulse'
      },
      {
        bg: 'assets/bed.png',
        chara: 'yui',
        face: '09',
        speaker: '由衣',
        text: 'ん……っ、あ……っ……そこ、すごく……ひびきます……',
        bpm: 128
      },
      {
        bg: 'assets/bed.png',
        chara: 'takase',
        face: '色気',
        speaker: '高瀬',
        text: '……声、我慢しなくていいのに。張ってる証拠ですから。……由衣さん、身体預けるの上手くなってきましたね',
        bpm: 130
      },
      {
        bg: 'assets/bed.png',
        chara: 'takase',
        face: '真顔',
        speaker: '',
        text: '高瀬の手が腰から太ももの付け根へと差し掛かった瞬間、ふっと動きが一瞬止まり、そっと離された。',
        bpm: 115
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'takase',
        face: '笑顔',
        speaker: '高瀬',
        text: 'はい、今日のおまけはここまで！ ほら、起き上がれます？ 都度払いなんで次回は無理に来なくていいですからね',
        bpm: 95,
        nextScene: 'session2_end'
      }
    ],

    session2_end: [
      {
        bg: 'assets/bg_entrance.png',
        chara: null,
        speaker: '',
        text: '触れられた腰の熱と、寸前で引き剥がされた冷たさが同居したまま、由衣はビルの外へ出た。\n（どうして……もっと触ってほしかったって、思っちゃったんだろう……）',
        bpm: 92
      },
      {
        bg: 'assets/title_bg.png',
        chara: 'takase',
        speaker: '',
        text: '【Session 2 終了】\n画面右上の「📋 カルテ」から高瀬の裏カルテ（第2回）を閲覧できます。',
        bpm: 78,
        isSessionEnd: true,
        sessionKey: 'session2',
        nextSessionStart: 'session3_intro'
      }
    ]
  }
};