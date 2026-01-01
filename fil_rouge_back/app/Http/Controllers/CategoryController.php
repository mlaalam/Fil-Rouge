<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;


class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categ = Category::all();
        return response()->json(['categories'=>$categ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
      
      try{
        $user = Auth::user();
        Gate::authorize('create',Category::class);
        $uploadIcon = Cloudinary::upload(
                $request->file('icon')->getRealPath()
            );
        $iconUrl = $uploadIcon->getSecurePath();
        $categ = Category::create([
          'title' => $request->title,
          'icon' => $iconUrl,
          'artisan_id' => $user->id
        ]);
        return response()->json(['message'=>'category is create seccussfuly' ,'categorie'=>$categ]);
      }catch(\Exception $e){
        return response()->json([
          "success"=>false,
          'message' => 'Erreur lors de la création: ' . $e->getMessage()
        ],500);
      }
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, Category $category ,$id)
    { 
      try{
        $category = Category::find($id);
        if (!$category) {
            return response()->json([
                'message' => 'Category not found'
            ], 404);
        }
        Gate::authorize('update',$category);
         if ($request->hasFile('icon')) {
            $iconUrl = Cloudinary::upload(
                $request->file('icon')->getRealPath()
            )->getSecurePath();
            $category->icon = $iconUrl ?? $category->icon ;
        }
        $category->title = $request->title ?? $category->title;
        $category->save();
        return response()->json(['message'=>'category is update seccussfuly' ,'categories'=>$category]);
      }catch(\Exception $e){
          return response()->json([
          "success"=>false,
          'message' => 'Erreur update is not seccussfuly: ' . $e->getMessage()
        ],500);
      }
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category , $id)
    {
        $category = Category::find($id);
        if (!$category) {
            return response()->json([
                'message' => 'Category not found'
            ], 404);
        }
        Gate::authorize('delete',$category);
        $category->delete();
        return response()->json(['message'=>'category is delete seccussfuly' ,'categories'=>$category]);
      }
}
