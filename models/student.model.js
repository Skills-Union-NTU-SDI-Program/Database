import { DataTypes, Model } from "sequelize";

export default function (sequelize) {

    class studentModel extends Model {}

    studentModel.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                field: "name",
            },
            schoolId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "school_id",
            },
            parent: {
                type: DataTypes.STRING,
                allowNull: false,
                field: "parent",
            },
            testimony: {
                type: DataTypes.TEXT,
                allowNull: false,
                field: "testimony",
            },
            createdAt: {
                type: DataTypes.DATE,
                field: "created_at",
            },
              updatedAt: {
                type: DataTypes.DATE,
                field: "updated_at",
            },
        
        },
        {
            sequelize,
            modelName: "Student",
            tableName: "students",
        }
    );

    return studentModel;    
};