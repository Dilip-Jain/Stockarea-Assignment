<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;

class WarehouseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('warehouses')->insert([
            ['name' => "Warehouse-165", 'code' => "W-00001", 'city' => "Delhi", 'space_available' => 1234, 'type' => 2, 'cluster' => "cluster-a-32", 'is_registered' => true, 'is_live' => false,],
            ['name' => "Warehouse-276", 'code' => "W-00002", 'city' => "Chennai", 'space_available' => 124, 'type' => 1, 'cluster' => "cluster-a-1", 'is_registered' => true, 'is_live' => false,],
            ['name' => "Warehouse-3039", 'code' => "W-00003", 'city' => "Indore", 'space_available' => 134, 'type' => 1, 'cluster' => "cluster-a-1", 'is_registered' => true, 'is_live' => false,],
            ['name' => "Warehouse-324", 'code' => "W-00004", 'city' => "Chennai", 'space_available' => 12, 'type' => 2, 'cluster' => "cluster-a-21", 'is_registered' => true, 'is_live' => false,],
            ['name' => "Warehouse-5454", 'code' => "W-00005", 'city' => "Chennai", 'space_available' => 1243434, 'type' => 1, 'cluster' => "cluster-a-21", 'is_registered' => true, 'is_live' => false,],
            ['name' => "Warehouse-4345", 'code' => "W-00006", 'city' => "Chennai", 'space_available' => 1, 'type' => 2, 'cluster' => "cluster-a-21", 'is_registered' => true, 'is_live' => false,],
            ['name' => "Warehouse-3455", 'code' => "W-00007", 'city' => "Mumbai", 'space_available' => 4, 'type' => 2, 'cluster' => "cluster-a-2", 'is_registered' => true, 'is_live' => false,],
            ['name' => "Warehouse-23455", 'code' => "W-00008", 'city' => "Bangalore", 'space_available' => 3456, 'type' => 1, 'cluster' => "cluster-a-21", 'is_registered' => true, 'is_live' => true,],
            ['name' => "Warehouse-6457", 'code' => "W-00009", 'city' => "Bangalore", 'space_available' => 1234545, 'type' => 1, 'cluster' => "cluster-a-1", 'is_registered' => true, 'is_live' => false,],
            ['name' => "Warehouse-32456", 'code' => "W-000010", 'city' => "Guwahati", 'space_available' => 121234, 'type' => 1, 'cluster' => "cluster-a-1", 'is_registered' => true, 'is_live' => true,],
            ['name' => "Warehouse-3245678", 'code' => "W-000011", 'city' => "Delhi", 'space_available' => 98, 'type' => 2, 'cluster' => "cluster-v-2", 'is_registered' => true, 'is_live' => false,],
            ['name' => "Warehouse-4567", 'code' => "W-000012", 'city' => "Indore", 'space_available' => 97, 'type' => 1, 'cluster' => "cluster-a-1", 'is_registered' => true, 'is_live' => true,],
            ['name' => "Warehouse-458", 'code' => "W-000013", 'city' => "Delhi", 'space_available' => 654, 'type' => 2, 'cluster' => "cluster-a-1", 'is_registered' => true, 'is_live' => false,],
        ]);
    }
}
