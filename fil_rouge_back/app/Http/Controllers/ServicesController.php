<?php

namespace App\Http\Controllers;

use App\Models\Services;
use App\Http\Requests\StoreServicesRequest;
use App\Http\Requests\UpdateServicesRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class ServicesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $services = Services::all();
        return response()->json(['success'=>true , 'services'=>$services]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreServicesRequest $request)
    {  

        try{
          $user = Auth::user();
          Gate::authorize('create',Services::class);
          $services = Services::create([
            'title' => $request->title,
            'artisan_id' => $user->id
          ]);
          return response()->json(['success'=>true ,'message'=>'services is created' ,'services'=>$services],201);
        }catch(\Exception $e){
          return response()->json([
            'success'=>false,
            'message' =>'Error while creating the service',
            $e->getMessage()
          ],500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Services $services)
    {
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateServicesRequest $request, Services $services ,$id)
    {
        $services = Services::find($id);
        if(!$services){
            return response()->json([
                'message' => 'Services not found'
            ], 404);
        }
        Gate::authorize('update',$services);
        $services->title = $request->title;
        $services->save();
        return response()->json(['success'=>true ,'messsage'=>'services updated','services'=>$services]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Services $services ,$id)
    {
        $services = Services::find($id);
        if(!$services){
            return response()->json([
                'message' => 'Services not found'
            ], 404);
        }
        Gate::authorize('delete',$services);
        $services->delete();
        return response()->json(['success'=>true ,'messsage'=>'services deleted','services'=>$services]);
    }
}
