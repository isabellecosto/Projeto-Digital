<?php

namespace App\Models\Product;

use App\DTO\products\ProductsMetadataDTO;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;

class ProductMetadata extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'metadata',
    ];

    protected $casts = [
        'metadata' => 'array', // Converte JSON para array
    ];

    /**
     * Factory method para criar metadados a partir de um arquivo e salvar no campo JSON.
     *
     * @param UploadedFile $file
     * @param array $extraData (dados adicionais como author_id)
     * @return self
     */
    public static function createFromFile(UploadedFile $file, ProductsMetadataDTO $metadataDTO): self
    {
        // Extrair metadados usando o DTO e convertê-los em array
        $metadata = $metadataDTO->toArray();

        // Criar e salvar o modelo com os metadados
        return self::create([
            'metadata' => $metadata, // Salva os metadados no campo JSON
        ]);
    }
}
