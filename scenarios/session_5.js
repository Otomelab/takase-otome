window.SCENARIO_SESSION5 = {
  secretNotes: {
    session5: {
      title: '高瀬の電子カルテ：小野寺由衣 様（第5回）',
      publicNote: '【主訴】夜間疲労蓄積、首肩の張り。21:00最終枠利用。\n【内容】夜間コンディショニング整体（60分）。過度な刺激を避け副交感神経優位へ誘導。\n【所見】睡眠の質改善を主眼に置いたアプローチ。筋緊張は良好に緩和。22:00退店。\n【次回】体幹バランストレーニング再開予定。',
      secretNote: '【裏メモ（非公開）】\n21時の最終枠取ってきた時点で、由衣さんがめちゃくちゃ意識して自爆しかけてるのが痛いほど伝わってきた。\n薄暗い店内で、二人きりで、遅い時間。「何か起きるかも」って身構えて心拍跳ねてた。\n……ここで手を出したら、俺が過去に失敗したあの過ちと同じになる。\n「客が自分の足で越えてくるまで、絶対に触れ方も言葉も変えない」。\nその規則を守るため、徹底してプロの顔を崩さずに淡々と施術して22時に送り出した。\n「お疲れさまでした」って言った瞬間の、由衣さんの恥ずかしさと拍子抜けが混ざった瞳。\n……俺だってギリギリだった。今夜触れなかったのは、由衣さんを大事にしたいからだ。'
    }
  },
  scenes: {
    session5_intro: [
      {
        bg: 'assets/bg_entrance.png',
        chara: null,
        speaker: '',
        text: '夜の21時。雑居ビルの他のテナントはすでに静まり返り、非常階段の灯りだけがぼんやりと廊下を照らしていた。',
        bpm: 95
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'yui',
        face: '08',
        speaker: '由衣',
        text: '（……どうして私、こんな遅い枠を予約しちゃったんだろう。サロンに二人きりなんて、何かを期待してるみたいで……）',
        bpm: 105,
        effect: 'pulse'
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'takase',
        face: '笑顔',
        speaker: '高瀬',
        text: 'こんばんは由衣さん。遅い時間にお疲れさまです。今日はずいぶん遅くまで仕事頑張ったんですね',
        bpm: 98
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'takase',
        face: '真顔',
        speaker: '高瀬',
        text: '夜遅いんで、今日はトレーニングなしで、睡眠の質を上げる整体だけにしましょう。奥へどうぞ',
        bpm: 95,
        nextScene: 'session5_bed'
      }
    ],

    session5_bed: [
      {
        bg: 'assets/bed.png',
        chara: null,
        speaker: '',
        text: '間接照明だけが灯る静まり返った室内。外の車の音すら遠く、二人の衣擦れの音だけが響く。',
        bpm: 110
      },
      {
        bg: 'assets/bed.png',
        chara: 'yui',
        face: '09',
        speaker: '',
        text: '（こんな夜遅くの密室で……何かあったらどうしよう。……ううん、私は何を期待してるの……）',
        bpm: 118,
        effect: 'pulse'
      },
      {
        bg: 'assets/bed.png',
        chara: 'takase',
        face: '真顔',
        speaker: '高瀬',
        text: '首の付け根、少し圧かけますね。……痛くないですか？',
        bpm: 105
      },
      {
        bg: 'assets/bed.png',
        chara: null,
        speaker: '',
        text: '高瀬の手つきは、どこまでも正確で、迷いがなく、完璧な整体師としてのタッチだった。卑猥な下心など微塵も感じさせない。',
        bpm: 100
      },
      {
        bg: 'assets/bed.png',
        chara: 'takase',
        face: '真顔',
        speaker: '高瀬',
        text: '……はい、終わりです。時計見てください、ちょうど22時。きっちり60分です',
        bpm: 92,
        nextScene: 'session5_end'
      }
    ],

    session5_end: [
      {
        bg: 'assets/bg_entrance.png',
        chara: 'takase',
        face: '笑顔',
        speaker: '高瀬',
        text: '夜道気をつけて帰ってくださいね。エレベーター、呼んでおきましたから',
        bpm: 85
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'yui',
        face: '08',
        speaker: '由衣',
        text: 'あ……ありがとうございました……おやすみなさい……',
        bpm: 96
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: null,
        speaker: '',
        text: 'エレベーターの扉が閉まった瞬間、由衣はその場にしゃがみ込みそうになった。\n（私……一人で身構えて、一人で空回りして……バカみたい。あの人は、ただの完璧なトレーナーなのに……！）',
        bpm: 112,
        effect: 'pulse'
      },
      {
        bg: 'assets/title_bg.png',
        chara: 'takase',
        speaker: '',
        text: '【Session 5 終了】\n画面右上の「♥ BPM（カルテ）」から高瀬の裏カルテ（第5回）を閲覧できます。',
        bpm: 78,
        isSessionEnd: true,
        sessionKey: 'session5',
        nextSessionStart: 'session6_intro'
      }
    ]
  }
};