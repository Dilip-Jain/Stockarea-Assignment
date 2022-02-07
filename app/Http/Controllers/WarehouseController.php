<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Warehouse;
use DB;

class WarehouseController extends Controller
{
    // Fetch Warehouse
    protected function details(){
        try{
            $warehouse = Warehouse::all();
            return response(['warehouse'=>$warehouse], 201);
        }catch(ModelNotFoundException $e){
            return response(['message' => 'oops. We\'re facing some trouble. Please try again.'], 401);
        }
    }

    // Edit Details
    protected function edit(Request $data, $id){
        try{
            $data->validate([
                'name' => 'required|string|max:255',
                'code' => 'required|string|max:255',
                'city' => 'required|string|max:255',
                'space_available' => 'required|integer|min:0',
                'type' => 'required|integer',
                'cluster' => 'required|string|max:255'
            ], [
                'name.required' => 'Please enter the name of your warehouse',
                'name.string' => 'Please enter the name of your warehouse',
                'name.max' => "Max. 255 character allowed",
                'code.required' => 'Please enter the code of your warehouse',
                'code.string' => 'Please enter the code of your warehouse',
                'code.max' => "Max. 255 character allowed",
                'city.required' => 'Please enter the city of your warehouse',
                'city.string' => 'Please enter the city of your warehouse',
                'city.max' => "Max. 255 character allowed",
                'space_available.required' => "Please enter the available space in the warehouse",
                'space_available.integer' => "Please enter the available space in the warehouse",
                'space_available.min' => "Please enter the available space in the warehouse",
                'type.required' => 'Please specify the type of your warehouse',
                'type.integer' => 'Please specify the type of your warehouse',
                'type.max' => "Max. 255 character allowed",
                'cluster.required' => 'Please specify the cluster of your warehouse',
                'cluster.string' => 'Please specify the cluster of your warehouse',
                'cluster.max' => "Max. 255 character allowed",
            ]);

            $warehouse = Warehouse::find($data['id']);
            try{
                DB::transaction(function() use ($data, $warehouse){
                    $warehouse->name = $data['name'];
                    $warehouse->code = $data['code'];
                    $warehouse->city = $data['city'];
                    $warehouse->space_available = $data['space_available'];
                    $warehouse->type = $data['type'];
                    $warehouse->cluster = $data['cluster'];
                    $warehouse->is_registered = $data['is_registered'];
                    $warehouse->is_live = $data['is_live'];
                    $warehouse->save();
                });

                return response()->json($warehouse, 201);
            }
            catch(Exception $e){
                return response(['message' => 'oops. We\'re facing some trouble. Please try again.'], 401);
            }
            return response(['message' => 'Something went wrong. Please try again later.'], 401);
        }catch(ModelNotFoundException $e){
            return response(['message' => 'Something went wrong. Please try again later'], 401);
        }
    }

}
