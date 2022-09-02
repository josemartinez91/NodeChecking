const { Registration } = require("../models/registration.model");

const getAllRegistration = async (req, res) => {
  try {
    const registration = await Registration.findAll();

    res.status(200).json({
      status: "success",
      data: { registration },
    });
  } catch (error) {
    console.log(error);
  }
};

const getRegistration = async (req, res) => {
  try {
    const { id } = req.params;

    const registration = await Registration.findOne({ where: { id } });

    if (!registration) {
      res.status(404).json({
        status: "error",
        data: {
          message: "Registration not found ",
        },
      });
    }

    res.status(200).json({
      status: "success",
      data: { registration },
    });
  } catch (error) {
    console.log(error);
  }
};

const createRegistration = async (req, res) => {
  try {
    const { entranceTime } = req.body;

    const newRegistration = await Registration.create({ entranceTime });

    res.status(201).json({
      status: "success",
      data: { newRegistration },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRegistration = async (req, res) => {
  try {
    const { exitTime, status } = req.body;
    const { id } = req.params;

    const registration = await Registration.findOne({ where: { id } });

    if (!registration) {
      res.status(404).json({
        status: "error",
        data: {
          message: "Registration not found",
        },
      });
    } else if (registration.status === "Out") {
      res.status(400).json({
        status: "error",
        data: {
          message: "Registration alredy Out",
        },
      });
    } else if (registration.status === "Cancelled") {
      res.status(400).json({
        status: "error",
        data: {
          message: "Registration was cancelled",
        },
      });
    }
    await registration.update({ exitTime, status: "Out" });

    res.status(200).json({
      status: "success",
      data: { registration },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteRegistration = async (req, res) => {
    try {
        const {id} = req.params;

        const registration = await Registration.findOne({where:{id}})

        if(!registration){
            res.status(404).json({
                status: 'error',
                data: {
                    message: 'Registration not found'
                }
            })
        }else if(registration.status === "Out"){
            res.status(200).json({
                status: 'success',
                data:{
                    message:"Registration is already out"
                }
            })
        }else if(registration.status=== "Cancelled"){
            res.status(400).json({
                status: "success",
                data: {
                    message: "Registration is already cancelled"
                }
            })
        }

        registration.update({status:"Cancelled"})

        res.status(204).json({
            status: "Success"
        })

    } catch (error) {
        console.log(error);
    }
};

module.exports = {
  getAllRegistration,
  createRegistration,
  getRegistration,
  updateRegistration,
  deleteRegistration,
};
