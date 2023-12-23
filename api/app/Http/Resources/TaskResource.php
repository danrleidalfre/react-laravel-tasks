<?php

namespace App\Http\Resources;

use DateTime;
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
                    'created_at' => $tag->created_at->format('d/m/y H:i:s'),
                ];
            }),
            'created_at' => $this->formatDate($this->created_at),
            'updated_at' => $this->formatDate($this->updated_at),
            'completed_at' => $this->formatDate($this->completed_at),
        ];
    }

    protected function formatDate(?DateTime $date): string|null
    {
        if ($date) {
            return "Dia {$date->format('d/m/y')} às {$date->format('H:i:s')}";
        }

        return null;
    }
}
