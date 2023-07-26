
module.exports =(sequelize,DataTypes) =>  // standared
{

    const mosta5dem = sequelize.define('mosta5dem',{
       id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
       },
       username: {
        type: DataTypes.STRING,
        allowNull: false
        
       },
   password: {
    type: DataTypes.STRING,
    allowNull: false
       },
    });   // standared
     
    return mosta5dem; // standared
};




