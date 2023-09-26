const express = require("express")
const {Food} = require("../models")


// Controllers

// index
async function index(req, res, next) {
    try {
        res.json(await Food.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
};

// create
async function create(req, res, next){
    try {
        const createdFood = await Food.create(req.body)
        console.log(createdFood)
        res.json(createdFood)
    } catch (error) {
        res.status(400).json(error)
    }
};

// show
async function show(req,res,next) {
    try {
        res.json(await Food.findById(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
};

// delete
async function destroy(req, res, next){
    try {
        res.json(await Food.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
};

// update
async function update(req, res, next){
    try {
        res.json(await Food.findByIdAndUpdate(req.params.id, req.body, {new:true}))
    } catch (error) {
        res.status(400).json(error)
    }
};



module.exports = {
    index,
    create,
    show,
    delete: destroy,
    update
}