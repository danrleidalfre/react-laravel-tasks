<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TaskResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'tags' => $this->tags->map(function ($tag) {
                return [
                    'value' => $tag->id,
                    'label' => $tag->title,
                    'created_at' => $tag->created_at->format('d/m/Y H:i'),
                ];
            }),
            'created_at' => $this->created_at->format('d/m/Y H:i'),
            'completed_at' => $this->completed_at ? $this->completed_at->format('d/m/Y H:i') : null,
        ];
    }
}
