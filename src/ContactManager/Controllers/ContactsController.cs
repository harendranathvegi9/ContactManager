using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ContactManager.Models;
using ContactManager.Repository;

namespace ContactManager.Controllers
{
    [Route("api/[controller]")]
    public class ContactsController : Controller
    {
        private IContactRepository contactRepository;

        public ContactsController(IContactRepository contactRepository)
        {
            this.contactRepository = contactRepository;
        }

        public IEnumerable<Contact> GetAll()
        {
            return contactRepository.GetAll();
        }

        [HttpGet("{id}", Name = "GetContact")]
        public IActionResult GetById(string id)
        {
            var contact = contactRepository.Get(id);
            if (contact == null)
            {
                return NotFound();
            }

            return new ObjectResult(contact);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Contact contact)
        {
            if (contact == null)
            {
                return BadRequest();
            }

            contactRepository.Add(contact);
            return CreatedAtRoute("GetContact", new { id = contact.ContactId }, contact);
        }

        [HttpPut("{id}")]
        public IActionResult Update(string id, [FromBody] Contact contact)
        {
            if (contact == null || contact.ContactId != id)
            {
                return BadRequest();
            }

            var currentContact = contactRepository.Get(id);
            if (currentContact == null)
            {
                return NotFound();
            }

            contactRepository.Update(contact);
            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            var currentContact = contactRepository.Get(id);
            if (currentContact == null)
            {
                return NotFound();
            }

            contactRepository.Remove(id);
            return new NoContentResult();
        }
    }
}