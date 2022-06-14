const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define("Users", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING(100), 
        allowNull: false,    
      },
      passwd: {
        type: DataTypes.STRING(100),     
        allowNull: false,
      },
      phonenum: {
        type: DataTypes.STRING(11),
        allowNull: false,
      },
      adultcertification: {
        type: DataTypes.STRING(1),
      },
      kidname1: {
        type: DataTypes.STRING(100),
      },
      kidname2: {
        type: DataTypes.STRING(100),
      },
      kidname3: {
        type: DataTypes.STRING(100),
      },
      regdate: {
        type: DataTypes.DATE,
        comment: "셍성시간",
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      updatedate: {
        type: DataTypes.DATE,
        comment: "수정시간",
        defaultValue: Sequelize.NOW,
      },
      firstlogintime: {
        type: DataTypes.DATE,
        comment: "최초 로그인 시간",
        defaultValue: Sequelize.NOW
      },
      loginupdate: {
        type: DataTypes.DATE,
        comment: "로그인 시간 업데이트",
        defaultValue: Sequelize.NOW
      },
    }, {
      charset: "utf8", // 한국어 설정
      collate: "utf8_general_ci", // 한국어 설정
      tableName: "tbl_Userinfo", // 테이블 이름
      timestamps: false, // createAt & updateAt 활성화
      //paranoid: true, // timestamps 가 활성화 되어야 사용 가능 > deleteAt 옵션 on
    });
  
    return Users;
    };
 
