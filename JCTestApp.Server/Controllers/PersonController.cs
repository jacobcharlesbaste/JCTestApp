using JCTestApp.Server.Models;
using Microsoft.AspNetCore.Mvc;
using System;

namespace JCTestApp.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        private static List<Person> data = new List<Person>
        {
            new Person { Id = 1, Name = "Jack", Email = "jack@gmail.com", Gender = "male" },
            new Person { Id = 2, Name = "Peter", Email = "peter@gmail.com", Gender = "male" },
            new Person { Id = 3, Name = "Mary", Email = "mary@gmail.com", Gender = "female" },
            new Person { Id = 4, Name = "Smith", Email = "smith@gmail.com", Gender = "male" },
            new Person { Id = 5, Name = "John", Email = "john@gmail.com", Gender = "male" }
        };

        [HttpGet]
        public IEnumerable<Person> Get()
        {
            return data.ToArray();
        }
    }
}
