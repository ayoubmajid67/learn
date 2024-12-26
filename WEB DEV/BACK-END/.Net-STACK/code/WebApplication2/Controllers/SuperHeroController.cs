using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class SuperHeroController : ControllerBase
    {
        [HttpGet]
        public  ActionResult<SuperHero> GetSuperHeroes()
        {
            var superHeroes = new List<SuperHero>
            {
                new SuperHero
                {
                    Id = "1",
                    Name = "Superman",
                    FirstName = "Clark",
                    LastName = "Kent",
                    Place = "Metropolis"
                }
            };

            return Ok(superHeroes);
        }
    }
}
