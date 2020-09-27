import React from "react";
import Form from "./common/form";
import { getGenres } from "../services/fakeGenreService";
import Joi from "joi-browser";

class MovieForm extends Form {
    state = {
        data: {
            title: "",
            genre: "",
            numberInStock: "",
            dailyRentalRate: "",
        },
        errors: {},
    };

    handleSave = () => {
        this.props.history.push("/movies");
        // todo: save internally in the memory
    };

    schema = {
        title: Joi.string().required().label("Title"),
        genre: Joi.string().required().label("Genre"),
        numberInStock: Joi.number().integer().required().min(0).max(100).label("Number in Stock"),
        dailyRentalRate: Joi.number().required().min(0).max(10).label("Daily Rental Rate"),
    };

    doSubmit = () => {
        console.log("Submitted");
    };

    render() {
        const { match } = this.props;
        return (
            <div>
                <h1>Movie Form {match.params.id !== "new" && match.params.id}</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title")}
                    {this.renderSelect("genre", "Genre", getGenres())}
                    {this.renderInput("numberInStock", "Number in Stock", "number")}
                    {this.renderInput("dailyRentalRate", "Rate")}
                    <button className="btn btn-primary" onClick={this.handleSave}>
                        Save
                    </button>
                </form>
            </div>
        );
    }
}

export default MovieForm;
