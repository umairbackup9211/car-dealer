"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingActions from "@/components/floating-actions"
import AdvancedSelect from "@/components/advanced-select"
import { SlidersHorizontal, Grid3x3, List } from "lucide-react"

export default function VehiclesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [filters, setFilters] = useState({
    make: "",
    model: "",
    year: "",
    priceMin: "",
    priceMax: "",
    mileageMax: "",
    bodyType: "",
    fuelType: "",
    transmission: "",
  })

  const makes = ["Toyota", "Honda", "Ford", "Chevrolet", "Nissan", "BMW", "Mercedes-Benz", "Audi", "Jeep", "RAM"]
  const models = ["Camry", "Accord", "F-150", "Silverado", "Altima", "3 Series", "C-Class", "A4", "Wrangler", "1500"]
  const years = Array.from({ length: 25 }, (_, i) => 2025 - i)
  const bodyTypes = ["Sedan", "SUV", "Truck", "Coupe", "Hatchback", "Van", "Convertible"]
  const fuelTypes = ["Gasoline", "Diesel", "Hybrid", "Electric"]
  const transmissions = ["Automatic", "Manual"]

  // Demo vehicles
  const vehicles = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `${makes[i % makes.length]} ${models[i % models.length]}`,
    year: 2024 - (i % 5),
    price: 15000 + i * 3000,
    mileage: i * 5000,
    image: `/placeholder.svg?height=280&width=400&query=car%20${i + 1}`,
    color: ["Red", "Blue", "Black", "White", "Silver"][i % 5],
    bodyType: bodyTypes[i % bodyTypes.length],
    fuelType: fuelTypes[i % fuelTypes.length],
    transmission: transmissions[i % transmissions.length],
    featured: i % 3 === 0,
  }))

  const handleFilterChange = (name: string, value: string) => {
    setFilters((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <FloatingActions />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Browse Our Vehicles</h1>
          <p className="text-gray-300 text-lg">Find your perfect car from our quality selection</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-5 sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto">
                <div className="flex items-center gap-2 mb-5">
                  <SlidersHorizontal size={22} className="text-[#EC3827]" />
                  <h2 className="text-xl font-bold text-black">Filters</h2>
                </div>

                <div className="space-y-3.5">
                  <div>
                    <label className="block text-sm font-semibold text-black mb-1.5">Make</label>
                    <AdvancedSelect
                      options={makes}
                      value={filters.make}
                      onChange={(val) => handleFilterChange("make", val)}
                      placeholder="Select Make"
                      name="make"
                      searchable={true}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-black mb-1.5">Model</label>
                    <AdvancedSelect
                      options={models}
                      value={filters.model}
                      onChange={(val) => handleFilterChange("model", val)}
                      placeholder="Select Model"
                      name="model"
                      searchable={true}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-black mb-1.5">Year</label>
                    <AdvancedSelect
                      options={years}
                      value={filters.year}
                      onChange={(val) => handleFilterChange("year", val)}
                      placeholder="Select Year"
                      name="year"
                      searchable={true}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-sm font-semibold text-black mb-1.5">Min Price</label>
                      <input
                        type="number"
                        placeholder="$0"
                        value={filters.priceMin}
                        onChange={(e) => handleFilterChange("priceMin", e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC3827]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-black mb-1.5">Max Price</label>
                      <input
                        type="number"
                        placeholder="Any"
                        value={filters.priceMax}
                        onChange={(e) => handleFilterChange("priceMax", e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC3827]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-black mb-1.5">Max Mileage</label>
                    <input
                      type="number"
                      placeholder="Any"
                      value={filters.mileageMax}
                      onChange={(e) => handleFilterChange("mileageMax", e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC3827]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-black mb-1.5">Body Type</label>
                    <AdvancedSelect
                      options={bodyTypes}
                      value={filters.bodyType}
                      onChange={(val) => handleFilterChange("bodyType", val)}
                      placeholder="Select Body Type"
                      name="bodyType"
                      searchable={false}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-black mb-1.5">Fuel Type</label>
                    <AdvancedSelect
                      options={fuelTypes}
                      value={filters.fuelType}
                      onChange={(val) => handleFilterChange("fuelType", val)}
                      placeholder="Select Fuel Type"
                      name="fuelType"
                      searchable={false}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-black mb-1.5">Transmission</label>
                    <AdvancedSelect
                      options={transmissions}
                      value={filters.transmission}
                      onChange={(val) => handleFilterChange("transmission", val)}
                      placeholder="Select Transmission"
                      name="transmission"
                      searchable={false}
                    />
                  </div>

                  <button
                    onClick={() =>
                      setFilters({
                        make: "",
                        model: "",
                        year: "",
                        priceMin: "",
                        priceMax: "",
                        mileageMax: "",
                        bodyType: "",
                        fuelType: "",
                        transmission: "",
                      })
                    }
                    className="w-full py-2.5 border-2 border-gray-300 text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>

            {/* Vehicles Grid */}
            <div className="lg:col-span-3">
              {/* View Controls */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <p className="text-gray-700 font-semibold">Showing {vehicles.length} vehicles</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg cursor-pointer transition-colors ${viewMode === "grid" ? "bg-[#EC3827] text-white" : "bg-white text-black hover:bg-gray-100"}`}
                  >
                    <Grid3x3 size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg cursor-pointer transition-colors ${viewMode === "list" ? "bg-[#EC3827] text-white" : "bg-white text-black hover:bg-gray-100"}`}
                  >
                    <List size={20} />
                  </button>
                </div>
              </div>

              <div
                className={
                  viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "flex flex-col gap-6"
                }
              >
                {vehicles.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                      viewMode === "list" ? "flex flex-col sm:flex-row" : ""
                    }`}
                  >
                    <Link
                      href={`/vehicles/${vehicle.id}`}
                      className={`relative ${viewMode === "list" ? "w-full sm:w-1/3 h-48 sm:h-auto" : "h-56"} bg-gray-200 overflow-hidden group cursor-pointer`}
                    >
                      <img
                        src={vehicle.image || "/placeholder.svg"}
                        alt={vehicle.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {vehicle.featured && (
                        <div className="absolute top-3 right-3 bg-[#EC3827] text-white px-3 py-1 rounded-full text-sm font-bold">
                          Featured
                        </div>
                      )}
                    </Link>

                    <div className={`p-6 ${viewMode === "list" ? "w-full sm:w-2/3" : ""}`}>
                      <Link href={`/vehicles/${vehicle.id}`} className="cursor-pointer">
                        <h3 className="font-bold text-xl text-black mb-3 hover:text-[#EC3827] transition-colors">
                          {vehicle.name}
                        </h3>
                      </Link>
                      <div
                        className={`space-y-2 mb-4 text-sm text-gray-600 ${viewMode === "list" ? "grid grid-cols-2 gap-x-4" : ""}`}
                      >
                        <p>
                          <span className="font-semibold">Year:</span> {vehicle.year}
                        </p>
                        <p>
                          <span className="font-semibold">Mileage:</span> {vehicle.mileage.toLocaleString()} mi
                        </p>
                        <p>
                          <span className="font-semibold">Body:</span> {vehicle.bodyType}
                        </p>
                        <p>
                          <span className="font-semibold">Fuel:</span> {vehicle.fuelType}
                        </p>
                        <p>
                          <span className="font-semibold">Transmission:</span> {vehicle.transmission}
                        </p>
                        <p>
                          <span className="font-semibold">Color:</span> {vehicle.color}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <span className="text-2xl md:text-3xl font-bold text-[#EC3827]">
                          ${vehicle.price.toLocaleString()}
                        </span>
                        <Link
                          href={`/vehicles/${vehicle.id}`}
                          className="bg-[#EC3827] text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-[#d42f1f] transition-colors cursor-pointer"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
