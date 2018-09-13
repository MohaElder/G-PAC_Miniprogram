
Page({

  /**
   * 页面的初始数据
   */
  data: {
    SubjectList: ["Math", "Eng", "Chi", "Phy" , "Bio", "His", "Geo"],//Subjects (Not used in the following code, only to make the data
    
    level: ['S', 'S+', 'H', 'H+', 'AP'],
    pLevel: ['S', 'S', 'S', 'S', 'S', 'S', 'S'],
    pScore: [-1, -1, -1, -1, -1, -1, -1],
    Mathindex: 0,
    Engindex: 0,
    Chiindex: 0,
    PhyChemindex: 0,
    Hisindex: 0,
    Ele1Findex: 0,
    Ele2index: 0,
    CreditList: ["7.5@0", "7.5@1", "5.0@1", "3.0@0", "3.0@0", "2.0@0", "2.0@0"],//Subjects'credit and the mark of whether it is language or nonlanguage. 1 = Language, 0 = NonLanguage

    NLAPList: [0, 2.6, 3.0, 3.3, 3.6, 3.9, 4.2, 4.5], //Credits for Language AP IN ORDER
    NLHList: [0, 2.4, 2.8, 3.1, 3.4, 3.7, 4.0, 4.3], //Credits for NonLanguage H IN ORDER
    NLSPlusList: [0, 2.25, 2.65, 2.95, 3.25, 3.55, 3.85, 4.15], //Credits for NonLanguage S+ IN ORDER
    NLSList: [0, 2.1, 2.5, 2.8, 3.1, 3.4, 3.7, 4.0], //Credits for NonLanguage S IN ORDER
    LAPList: [0, 2.6, 3.0, 3.3, 3.6, 3.9, 4.2, 4.5], //Credits for Language AP IN ORDER
    LHPLUSList: [0, 2.5, 2.9, 3.2, 3.5, 3.8, 4.1, 4.4], //Credits for Language H+ IN ORDER
    LHList: [0, 2.4, 2.8, 3.1, 3.4, 3.7, 4.0, 4.3], //Credits for Language H IN ORDER
    LSPLUSList: [0, 2.2, 2.6, 2.9, 3.2, 3.5, 3.8, 4.1], //Credits for Language S+ IN ORDER
    LSList: [0, 2.1, 2.5, 2.8, 3.1, 3.4, 3.7, 4.0], //Credits for Language S IN ORDER
  },

  getMathScore: function (e) {
    var formatter = "pScore[" + 0 + "]";
    this.setData({
      [formatter]: e.detail.value
    })
    //console.log(this.data.pScore[0])
  },

  getMathLevel: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    var formatter = "pLevel[" + 0 + "]";
    this.setData({
      Mathindex: e.detail.value,//显示前端level
      [formatter]: this.data.level[e.detail.value] //提取前端level      
    })
    //console.log(this.data.index)
    //console.log(this.data.pLevel[0])

  },

  getEngScore: function (e) {
    var formatter = "pScore[" + 1 + "]";
    this.setData({
      [formatter]: e.detail.value
    })
  },
  getEngLevel: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    var formatter = "pLevel[" + 1 + "]";
    this.setData({
      Engindex: e.detail.value,//显示前端level
      [formatter]: this.data.level[e.detail.value] //提取前端level   
    })
    //console.log(this.data.index)
    //console.log(this.data.MathLevel)

  },

  getChiScore: function (e) {
    var formatter = "pScore[" + 2 + "]";
    this.setData({
      [formatter]: e.detail.value
    })
  },
  getChiLevel: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    var formatter = "pLevel[" + 2 + "]";
    this.setData({
      Chiindex: e.detail.value,//显示前端level
      [formatter]: this.data.level[e.detail.value] //提取前端level   
    })
    //console.log(this.data.index)
    //console.log(this.data.MathLevel)

  },

  getPhyScore: function (e) {
    var formatter = "pScore[" + 3 + "]";
    this.setData({
      [formatter]: e.detail.value
    })
  },
  getPhyLevel: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    var formatter = "pLevel[" + 3 + "]";
    this.setData({
      Phyindex: e.detail.value,//显示前端level
      [formatter]: this.data.level[e.detail.value] //提取前端level    
    })
    //console.log(this.data.index)
    //console.log(this.data.MathLevel)

  },

  getChemScore: function (e) {
    var formatter = "pScore[" + 4 + "]";
    this.setData({
      [formatter]: e.detail.value
    })
  },
  getChemLevel: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    var formatter = "pLevel[" + 4 + "]";
    this.setData({
      Chemindex: e.detail.value,//显示前端level
      [formatter]: this.data.level[e.detail.value] //提取前端level   
    })
    //console.log(this.data.index)
    //console.log(this.data.MathLevel)

  },

  getHisScore: function (e) {
    var formatter = "pScore[" + 5 + "]";
    this.setData({
      [formatter]: e.detail.value
    })
  },
  getHisLevel: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    var formatter = "pLevel[" + 5 + "]";
    this.setData({
      Hisindex: e.detail.value,//显示前端level
      [formatter]: this.data.level[e.detail.value] //提取前端level    
    })
    //console.log(this.data.index)
    //console.log(this.data.MathLevel)

  },

  getEle1Score: function (e) {
    var formatter = "pScore[" + 6 + "]";
    this.setData({
      [formatter]: e.detail.value
    })
  },
  getEle1Level: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    var formatter = "pLevel[" + 6 + "]";
    this.setData({
      Ele1index: e.detail.value,//显示前端level
      [formatter]: this.data.level[e.detail.value] //提取前端level   
    })
    //console.log(this.data.index)
    //console.log(this.data.MathLevel)

  },

  getEle2Score: function (e) {
    var formatter = "pScore[" + 7 + "]";
    this.setData({
      [formatter]: e.detail.value
    })
  },
  getEle2Level: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    var formatter = "pLevel[" + 7 + "]";
    this.setData({
      Ele2index: e.detail.value,//显示前端level
      [formatter]: this.data.level[e.detail.value] //提取前端level   
    })
    //console.log(this.data.index)
    //console.log(this.data.MathLevel)

  },
  //StartUp Function 
  Submit: function (e) {
    var total = 0;
    var rank = "";
    var that = this;
    var credit = 0;
    for (var count = 0; count < this.data.pLevel.length; count++) {
      if (this.data.pScore[count] != -1) {
        var TempList = this.data.CreditList[count].split("@")//Decode CreditList
        credit += parseFloat(TempList[0]);//Import Credit
        console.log(credit);
        total += that.getGpa(count);//Adds all the raw GPA
      }
    }

    var GPAFinal = total / credit;//Divides the Raw GPA with the credit.
    //GPA Satisfaction Evaluation
    if (GPAFinal <= 3) { rank = " Try harder!"; }
    else if (GPAFinal >= 3) { rank = " Sweet!"; }
    else { rank = "Error!"; }
    //Present GPA

    console.log("Your GPA is " + GPAFinal.toFixed(2) + "," + rank);
    //console.log(this.data.MathScore)
    //console.log(this.data.MathLevel)
  },

  //Data Importation Function
  getGpa: function (count) {
    var that = this;
    var subScore = this.data.pScore[count];//Import Score
    var subLevel = this.data.pLevel[count];//Import Level
    var TempList = this.data.CreditList[count].split("@");//Decode CreditList
    var Credit = parseFloat(TempList[0]);//Import Credit
    var Validator = parseInt(TempList[1]);//Import Class Validator
    //console.log(subScore,subLevel,Credit,Validator)
    if (Validator == 1)//Validate the type of the subject
    { return Credit * that.getL(subLevel, subScore); }
    else { return Credit * that.getNL(subLevel, subScore); }
  },

  //Subject Categorization Functions
  getNL: function (Level, Score) {
    console.log(Level);
    var that = this;
    if (Level == "AP") {
      return that.NonLanguageAP(Score);
    }
    if (Level == "H+") {
      return that.NonLanguageHPlus(Score);
    }
    if (Level == "H") {
      return that.NonLanguageH(Score);
    }
    if (Level == "S+") {
      return that.NonLanguageSPlus(Score);
    }
    if (Level == "S") {
      return that.NonLanguageS(Score);
    }
  },

  getL: function (Level, Score) {
    //console.log(Level + Score);
    var that = this
    if (Level == "AP") {
      return that.LanguageAP(Score);
    }
    if (Level == "H+") {
      return that.LanguageHPlus(Score);
    }
    if (Level == "H") {
      return that.LanguageH(Score);
    }
    if (Level == "S+") {
      return that.LanguageSPlus(Score);
    }
    if (Level == "S") {
      return that.LanguageS(Score);
    }
  },

  //Score Comparison Functions
  NonLanguageAP: function (Score) {
    var gpa = 0;
    console.log("AP", Score)
    if (Score <= 59)
      gpa = this.data.NLAPList[0];
    if (Score > 59 && Score <= 67)
      gpa = this.data.NLAPList[1];
    if (Score > 67 && Score <= 72)
      gpa = this.data.NLAPList[2];
    if (Score > 72 && Score <= 77)
      gpa = this.data.NLAPList[3];
    if (Score > 77 && Score <= 82)
      gpa = this.data.NLAPList[4];
    if (Score > 82 && Score <= 87)
      gpa = this.data.NLAPList[5];
    if (Score > 87 && Score <= 92)
      gpa = this.data.NLAPList[6];
    if (Score > 92 && Score <= 100)
      gpa = this.data.NLAPList[7];
    console.log(gpa)
    return gpa;
  },

  NonLanguageHPlus: function (Score) {
    var gpa = 0;
    if (Score <= 59)
      gpa = this.data.NLHList[0];
    if (Score > 59 && Score <= 67)
      gpa = this.data.NLHList[1];
    if (Score > 67 && Score <= 72)
      gpa = this.data.NLHList[2];
    if (Score > 72 && Score <= 77)
      gpa = this.data.NLHList[3];
    if (Score > 77 && Score <= 82)
      gpa = this.data.NLHList[4];
    if (Score > 82 && Score <= 87)
      gpa = this.data.NLHList[5];
    if (Score > 87 && Score <= 92)
      gpa = this.data.NLHList[6];
    if (Score > 92 && Score <= 100)
      gpa = this.data.NLHList[7];
    return gpa;
  },

  NonLanguageH: function (Score) {
    var gpa = 0;
    if (Score <= 59)
      gpa = this.data.NLHList[0];
    if (Score > 59 && Score <= 67)
      gpa = this.data.NLHList[1];
    if (Score > 67 && Score <= 72)
      gpa = this.data.NLHList[2];
    if (Score > 72 && Score <= 77)
      gpa = this.data.NLHList[3];
    if (Score > 77 && Score <= 82)
      gpa = this.data.NLHList[4];
    if (Score > 82 && Score <= 87)
      gpa = this.data.NLHList[5];
    if (Score > 87 && Score <= 92)
      gpa = this.data.NLHList[6];
    if (Score > 92 && Score <= 100)
      gpa = this.data.NLHList[7];
    return gpa;
  },

  NonLanguageSPlus: function (Score) {
    var gpa = 0;
    if (Score <= 59)
      gpa = this.data.NLSPlusList[0];
    if (Score > 59 && Score <= 67)
      gpa = this.data.NLSPlusList[1];
    if (Score > 67 && Score <= 72)
      gpa = this.data.NLSPlusList[2];
    if (Score > 72 && Score <= 77)
      gpa = this.data.NLSPlusList[3];
    if (Score > 77 && Score <= 82)
      gpa = this.data.NLSPlusList[4];
    if (Score > 82 && Score <= 87)
      gpa = this.data.NLSPlusList[5];
    if (Score > 87 && Score <= 92)
      gpa = this.data.NLSPlusList[6];
    if (Score > 92 && Score <= 100)
      gpa = this.data.NLSPlusList[7];
    return gpa;
  },

  NonLanguageS: function (Score) {
    console.log("S", Score);
    var gpa = 0;
    if (Score <= 59)
      gpa = this.data.NLSList[0];
    if (Score > 59 && Score <= 67)
      gpa = this.data.NLSList[1];
    if (Score > 67 && Score <= 72)
      gpa = this.data.NLSList[2];
    if (Score > 72 && Score <= 77)
      gpa = this.data.NLSList[3];
    if (Score > 77 && Score <= 82)
      gpa = this.data.NLSList[4];
    if (Score > 82 && Score <= 87)
      gpa = this.data.NLSList[5];
    if (Score > 87 && Score <= 92)
      gpa = this.data.NLSList[6];
    if (Score > 92 && Score <= 100)
      gpa = this.data.NLSList[7];
    console.log(gpa);
    return gpa;
  },

  LanguageAP: function (Score) {
    var gpa = 0;
    if (Score <= 59)
      gpa = this.data.LAPList[0];
    if (Score > 59 && Score <= 67)
      gpa = this.data.LAPList[1];
    if (Score > 67 && Score <= 72)
      gpa = this.data.LAPList[2];
    if (Score > 72 && Score <= 77)
      gpa = this.data.LAPList[3];
    if (Score > 77 && Score <= 82)
      gpa = this.data.LAPList[4];
    if (Score > 82 && Score <= 87)
      gpa = this.data.LAPList[5];
    if (Score > 87 && Score <= 92)
      gpa = this.data.LAPList[6];
    if (Score > 92 && Score <= 100)
      gpa = this.data.LAPList[7];
    return gpa;
  },

  LanguageHPlus: function (Score) {
    var gpa = 0;
    if (Score <= 59)
      gpa = this.data.LAPList[0];
    if (Score > 59 && Score <= 67)
      gpa = this.data.LAPList[1];
    if (Score > 67 && Score <= 72)
      gpa = this.data.LAPList[2];
    if (Score > 72 && Score <= 77)
      gpa = this.data.LAPList[3];
    if (Score > 77 && Score <= 82)
      gpa = this.data.LAPList[4];
    if (Score > 82 && Score <= 87)
      gpa = this.data.LAPList[5];
    if (Score > 87 && Score <= 92)
      gpa = this.data.LAPList[6];
    if (Score > 92 && Score <= 100)
      gpa = this.data.LAPList[7];
    return gpa;
  },

  LanguageH: function (Score) {
    var gpa = 0;
    if (Score <= 59)
      gpa = this.data.LHList[0];
    if (Score > 59 && Score <= 67)
      gpa = this.data.LHList[1];
    if (Score > 67 && Score <= 72)
      gpa = this.data.LHList[2];
    if (Score > 72 && Score <= 77)
      gpa = this.data.LHList[3];
    if (Score > 77 && Score <= 82)
      gpa = this.data.LHList[4];
    if (Score > 82 && Score <= 87)
      gpa = this.data.LHList[5];
    if (Score > 87 && Score <= 92)
      gpa = this.data.LHList[6];
    if (Score > 92 && Score <= 100)
      gpa = this.data.LHList[7];
    return gpa;
  },

  LanguageSPlus: function (Score) {
    var gpa = 0;
    if (Score <= 59)
      gpa = this.data.LSPLUSList[0];
    if (Score > 59 && Score <= 67)
      gpa = this.data.LSPLUSList[1];
    if (Score > 67 && Score <= 72)
      gpa = this.data.LSPLUSList[2];
    if (Score > 72 && Score <= 77)
      gpa = this.data.LSPLUSList[3];
    if (Score > 77 && Score <= 82)
      gpa = this.data.LSPLUSList[4];
    if (Score > 82 && Score <= 87)
      gpa = this.data.LSPLUSList[5];
    if (Score > 87 && Score <= 92)
      gpa = this.data.LSPLUSList[6];
    if (Score > 92 && Score <= 100)
      gpa = this.data.LSPLUSList[7];
    return gpa;
  },

  LanguageS: function (Score) {
    var gpa = 0;
    if (Score <= 59)
      gpa = this.data.LSList[0];
    if (Score > 59 && Score <= 67)
      gpa = this.data.LSList[1];
    if (Score > 67 && Score <= 72)
      gpa = this.data.LSList[2];
    if (Score > 72 && Score <= 77)
      gpa = this.data.LSList[3];
    if (Score > 77 && Score <= 82)
      gpa = this.data.LSList[4];
    if (Score > 82 && Score <= 87)
      gpa = this.data.LSList[5];
    if (Score > 87 && Score <= 92)
      gpa = this.data.LSList[6];
    if (Score > 92 && Score <= 100)
      gpa = this.data.LSList[7];
    //console.log(gpa);
    return gpa;
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})