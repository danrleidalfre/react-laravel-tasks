<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TagResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'value' => $this->id,
            'label' => $this->title,
            'created_at' => "dia {$this->created_at->format('d/m/y')} às {$this->created_at->format('H:i:s')}",
        ];
    }
}
