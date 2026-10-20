window.SCENARIO_SESSION7 = {
  secretNotes: {
    session7: {
      title: '高瀬の電子カルテ：小野寺由衣 様（最終回：店じまい）',
      publicNote: '【主訴】全セッション完了に伴う最終コンディショニング。\n【内容】全身関節可動域調整、深部筋膜リリース完了。施錠確認済み。\n【所見】初回時の筋緊張・代償動作は完全解消。\n【備考】本日をもって「トレーナーとクライアント」としての施術契約は終了。',
      secretNote: '【裏メモ（非公開）】\n雨の最終枠。22時を過ぎて、入り口のサムターンを回して鍵をかけた。\n鍵を閉めたのは俺だけど、閉めさせたのは由衣さんの瞳だ。\nお互い、もう言い訳する気なんて最初からなかった。\n施術台に座らせて触れようとしたら、逆に由衣さんが俺の手首を掴んできた。\n親指を橈骨動脈に押し当てられて、「……脈、全然落ちないですね、高瀬さん」って。\n初回、俺が由衣さんにしたのと同じ手つきで、俺の脈の乱れを握られた。\n心拍130超え。プロの仮面なんて完全に粉々。\n「誰のせいだと思ってんの」って言った瞬間、もう完全に境界線は消えた。\n客でもトレーナーでもない。全部暴いて、全部もらう。'
    }
  },
  scenes: {
    session7_intro: [
      {
        bg: 'assets/bg_entrance.png',
        chara: null,
        speaker: '',
        text: '外は冷たい雨が降っていた。21時半。最後のセッションのために、由衣はサロンの扉を開けた。',
        bpm: 102
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'takase',
        face: '真顔',
        speaker: '高瀬',
        text: '雨、結構降ってましたね。……濡れませんでした？',
        bpm: 98
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'yui',
        face: '02',
        speaker: '由衣',
        text: '大丈夫です。……今日で、7回目ですね',
        bpm: 105
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'takase',
        face: '真顔',
        speaker: '高瀬',
        text: 'ええ。……今日で、一通りのメニューは全部終わりです。奥へ行きましょう',
        bpm: 100,
        nextScene: 'session7_lock'
      }
    ],

    session7_lock: [
      {
        bg: 'assets/bg_entrance.png',
        chara: null,
        speaker: '',
        text: '奥の部屋へ向かおうとした高瀬が、ふと足を止め、玄関のドアへと歩いていった。',
        bpm: 110
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'takase',
        face: '真顔',
        speaker: '',
        text: 'カチャリ、と重い金属音が静かな店内に響いた。高瀬が静かにサムターンを回し、内側から施錠する。',
        bpm: 125,
        effect: 'pulse'
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'yui',
        face: '08',
        speaker: '由衣',
        text: '……高瀬、さん……？',
        bpm: 130
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'takase',
        face: '色気',
        speaker: '高瀬',
        text: '今日はこれで店じまいだから。……もう、誰も来ないんで',
        bpm: 128,
        nextScene: 'session7_bed'
      }
    ],

    session7_bed: [
      {
        bg: 'assets/bed.png',
        chara: null,
        speaker: '',
        text: '施術ベッドの端に腰掛けた由衣の前に、高瀬がゆっくりと膝をついた。二人の視線が逃げ場もなく絡み合う。',
        bpm: 132
      },
      {
        bg: 'assets/bed.png',
        chara: 'takase',
        face: '真顔',
        speaker: '高瀬',
        text: '由衣さん。……ここまで来たら、もうトレーナーの顔なんてしてられないんですけど',
        bpm: 135
      },
      {
        bg: 'assets/bed.png',
        chara: 'yui',
        face: '03',
        speaker: '',
        text: '由衣は逃げ出さなかった。震える右手を伸ばし、高瀬の左手首を下からそっと包み込む。親指の腹を高瀬の橈骨動脈へピタリと当てた。',
        bpm: 140,
        effect: 'pulse'
      },
      {
        bg: 'assets/bed.png',
        chara: 'yui',
        face: '09',
        speaker: '由衣',
        text: '……脈、全然落ちないですね、高瀬さん。……すごく、速い',
        bpm: 145,
        effect: 'pulse'
      },
      {
        bg: 'assets/bed.png',
        chara: 'takase',
        face: '色気',
        speaker: '高瀬',
        text: '……誰のせいだと思ってんの',
        bpm: 148
      },
      {
        bg: 'assets/bed.png',
        chara: 'takase',
        face: '甘え',
        speaker: '',
        text: '高瀬が掠れた笑みをこぼし、由衣の手首を引き寄せてベッドの上へと引き倒した。プロの境界線が完全に崩れ去り、二人の熱い体温が重なり合う。',
        bpm: 155,
        effect: 'pulse'
      },
      {
        bg: 'assets/bed.png',
        chara: 'takase',
        face: '色気',
        speaker: '高瀬',
        text: 'もう、逃がさないから',
        bpm: 150,
        nextScene: 'session7_end'
      }
    ],

    session7_end: [
      {
        bg: 'assets/bed.png',
        chara: null,
        speaker: '',
        text: '雨の音だけが響く密室の中、施錠されたドアの向こう側の世界はもうどこにも存在しなかった。',
        bpm: 120
      },
      {
        bg: 'assets/title_bg.png',
        chara: 'takase',
        speaker: '',
        text: '【店じまいの合図 / 全7セッション完結】\n二人の境界線は完全に溶け合いました。\n画面右上の「♥ BPM（カルテ）」から高瀬の最終裏カルテを閲覧できます。',
        bpm: 78,
        isSessionEnd: true,
        sessionKey: 'session7'
      }
    ]
  }
};