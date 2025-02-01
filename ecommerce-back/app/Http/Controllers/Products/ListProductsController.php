<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Models\Product\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ListProductsController extends Controller
{
    public function execute(Request $request)
    {
        $perPage = $request->input('per_page', 10);
        $user = Auth::user();

        // Buscando e retornando os usuários com os campos selecionados
        return Product::select('id', 'product_name','product_description', 'product_category', 'product_price', 'product_older_price', 'product_image','product_quantity', 'promotion', 'em_alta', 'updated_at', 'created_at', 'metadata')
            ->paginate($perPage);
    }
}
