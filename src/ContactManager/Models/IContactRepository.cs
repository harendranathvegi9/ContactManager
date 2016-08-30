using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactManager.Models
{
    public interface IContactRepository
    {
        IEnumerable<Contact> GetAll();

        Contact Get(string contactId);

        void Add(Contact newContact);

        void Update(Contact contact);

        Contact Remove(string contactId);
    }
}
