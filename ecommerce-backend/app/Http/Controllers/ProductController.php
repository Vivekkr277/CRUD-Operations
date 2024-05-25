<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function addProduct(Request $req) {
    
         $product = new Product;
         $product -> name = $req->name;
         $product -> price = $req->price;
         $product -> description = $req->description;
         $product -> file_path = $req->file('file_path')->store('products');
         $product -> save();
         return $product;
          // return $req->file('myfile')->store('products');
    }

    public function update($id) {
        return Product::where('id',$id)->get();
    }

    public function updateProduct(Request $req) {
         $product = Product::find($req->id);
         $product -> name = $req->name;
         $product -> price = $req->price;
         $product -> description = $req->description;
        //  $product -> file_path = $req->file('file_path')->store('products');
         $product->save();
         return $product;
    }

    public function list() {
        return Product::all();
    }

    public function delete($id) {
        $result = Product::find($id);
        
        if($result) {
            $result->delete();
            return ["result"=>"deleted successfully"];
        } else {
            return ["error"=> "operation failed"];
        }
     }

     public function search($key) {
        return Product::where('name','like',"%$key%")->get();
     }
}
