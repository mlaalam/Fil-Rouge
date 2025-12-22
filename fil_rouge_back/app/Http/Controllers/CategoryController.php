<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;


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
          $uploadIcon = Cloudinary::upload(
                $request->file('icon')->getRealPath()
            );
            $iconUrl = $uploadIcon->getSecurePath();
        $categ = Category::create([
          'title' => $request->title,
          'icon' => $iconUrl
        ]);
        return response()->json(['message'=>'category is create seccussfuly' ,'categories'=>$categ]);
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
        $categ = Category::find($id);
        if (!$categ) {
            return response()->json([
                'message' => 'Category not found'
            ], 404);
        }
         if ($request->hasFile('icon')) {
            $iconUrl = Cloudinary::upload(
                $request->file('icon')->getRealPath()
            )->getSecurePath();
            $categ->icon = $iconUrl;
        }
        $categ->title = $request->title;
        $categ->save();
        return response()->json(['message'=>'category is update seccussfuly' ,'categories'=>$categ]);
      }catch(\Exception $e){
          return response()->json([
          "success"=>false,
          'message' => 'Erreur lors de la création: ' . $e->getMessage()
        ],500);
      }
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category , $id)
    {
        $categ = Category::find($id);
        if (!$categ) {
            return response()->json([
                'message' => 'Category not found'
            ], 404);
        }
        $categ->delete();
        return response()->json(['message'=>'category is delete seccussfuly' ,'categories'=>$categ]);
      }
}
