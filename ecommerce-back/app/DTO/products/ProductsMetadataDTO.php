<?php
namespace App\DTO\products;

use Illuminate\Http\UploadedFile;

class ProductsMetadataDTO
{
    public function __construct(protected UploadedFile $file) {}

    public function toArray(): array
    {
        return [
            'original_name' => $this->file->getClientOriginalName(),
            'size' => $this->file->getSize(),
            'type' => $this->file->getMimeType()
        ];
    }
}
