<?php

namespace Modules\Vivino\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class VivinoOrderResources extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($this);
    }
}
