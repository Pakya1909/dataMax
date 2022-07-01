import React from "react";
import { useForm } from "react-hook-form";


const FillerNodeForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    // console.log(watch("example")); 
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="col">
                    <label> Name of the filler node </label>
                    <input type="text" className="form-control" placeholder="filler node name" defaultValue="" {...register("node")} />
                </div> 

                <div className="col">
                    <label> Layer </label>
                    <input type="text" className="form-control" placeholder="Layer" defaultValue="" {...register("layer")} />
                </div>

                <div className="col">
                    <label htmlFor="state">Select Something </label>
                    <select className="form-control" {...register("state")} id="state">
                        <option value="">Select Your State</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Assam">Assam</option>
                        <option value="Goa">Goa</option>
                        <option value="Manipur">Manipur</option>
                    </select>
                </div>

                <div className="col">
                    <label> Mode  </label>
                    <div className="form-check">
                        <input {...register("clear")} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            clear
                        </label>
                    </div>
                    <div className="form-check">
                        <input {...register("append")} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Append
                        </label>
                    </div>
                </div>

                <div className="form-check form-check-inline">
                    <input {...register("check1")} className="form-check-input" type="checkbox" id="terms" value="agree" />
                    <label className="form-check-label" htmlFor="terms">I agree all terms and conditons</label>
                </div>
                <div className="form-check form-check-inline">
                    <input {...register("check2")} className="form-check-input" type="checkbox" id="updates" />
                    <label className="form-check-label" htmlFor="updates">send me latest Bootstrap updates</label>
                </div>

                <button type="submit" className="btn btn-success ms-5"> Done </button>
                <button type="submit" className="btn btn-warning m-1"> Cancle </button>
                <button type="submit" className="btn btn-danger m-1"> Delete </button>
            </form>
        </>
    )
}

export default FillerNodeForm
