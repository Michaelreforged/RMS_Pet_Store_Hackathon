# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


pet = Pet.create(name:"Dog")
pet2 = Pet.create(name:"Cat")
pet3 = Pet.create(name:"Hamster")

pet.items.create(name:"Food", description:"Healthy, chicken", price:58.00)
pet.items.create(name:"Toy", description:"Safe", price:15.00)
pet.items.create(name:"Collars and Leashes", description:"Fancy Gold collar", price:12.50)
pet2.items.create(name:"Food", description:"Healthy", price:35.00)
pet2.items.create(name:"Toy", description:"Plastic", price:10.00)
pet2.items.create(name:"Collars", description:"Fancy collar", price:14.78)
pet3.items.create(name:"Cage", description:"Steal and safe", price:70.00)
pet3.items.create(name:"Toys", description:"Plastic", price:10.00)
pet3.items.create(name:"Food", description:"Healthy", price:20.00)

job = Job.create(title:"Name Brand Groomer", company:"JMS", salary:100000)
job2 = Job.create(title:"Sitter", company:"JMS", salary:30000)
job3 = Job.create(title:"Trainer", company:"JMS", salary:55000)