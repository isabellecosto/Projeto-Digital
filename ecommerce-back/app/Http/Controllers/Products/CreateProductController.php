<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Models\Product\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class CreateProductController extends Controller
{   
    public function execute(Request $request)
    {
        $user = Auth::user();

        dd($user);

        $file = $request->file('image');
        $product_name = $request->input('product_name');
        $product_category = $request->input('product_category');
        $product_description = $request->input('product_description');
        $product_price = $request->input('product_price');
        $product_older_price = $request->input('product_older_price');
        $product_quantity = $request->input('product_quantity');
        $promotion = $request->input('promotion');
        $em_alta = $request->input('em_alta');
        $fileName = $this->uploadProduct($product_name, $file);
        $user = Auth::user();
        $metadata = $this->metadata($file);

        Product::create([
            "product_name" => $product_name,
            "user_id" => $user->id,
            "product_image" => $fileName,
            "product_category" => $product_category,
            "product_description" => $product_description,
            "product_price" => $product_price,
            "product_older_price" => $product_older_price,
            "product_quantity" => $product_quantity,
            "promotion" => $promotion,
            "em_alta" => $em_alta,
            "metadata" => json_encode($metadata),
        ]);
        return new JsonResponse("Produto salvo com sucesso", 201);
    }

    protected function uploadProduct(string $name, UploadedFile $file)
    {
        $newFileName = time() . "-" . Str::replace(' ', '-', $name);
        $extersion = $file->getClientOriginalExtension();
        $fileName = "{$newFileName}.{$extersion}";

        $file->storePubliclyAs("doc", $fileName, "public");  

        return $fileName;
    }

    protected function metadata(UploadedFile $file)
    {
        return [
            'size' => $file->getSize(),
            'mimitype' => $file->getClientMimeType()
        ];
    }
}
