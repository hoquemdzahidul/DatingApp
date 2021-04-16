using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace DatingApp.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private DataContext _dbContext;

    

      
         public WeatherForecastController(DataContext dataContext)
        {
            this._dbContext = dataContext;
            
        }
       


        [HttpGet]
        public async Task<IActionResult> Get()
        {
            
            var values =await _dbContext.Values.ToListAsync();

            return Ok(values);
        }
    }
}
