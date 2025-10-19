using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using WebApplication2.Data;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class SuperHeroController : ControllerBase
    {

        private readonly DataContext  _dataContext;
        public SuperHeroController( DataContext context)
        {
            _dataContext = context;

        }

        [HttpGet]
        public  async Task<IActionResult> GetSuperHeroes()
        {
            var superHeroes = await  _dataContext.SuperHeroes.ToListAsync();


            return Ok(superHeroes);
        }
    }
}
