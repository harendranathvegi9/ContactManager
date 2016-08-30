using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactManager.Models
{
    public class ContactRepository : IContactRepository
    {
        private ConcurrentDictionary<string, Contact> contactList = new ConcurrentDictionary<string, Contact>();

        public void Add(Contact newContact)
        {
            var newId = Guid.NewGuid().ToString();
            newContact.ContactId = newId;
            contactList.TryAdd(newId, newContact);
        }

        public Contact Get(string contactId)
        {
            Contact contact;
            contactList.TryGetValue(contactId, out contact);
            return contact;
        }

        public IEnumerable<Contact> GetAll()
        {
            return contactList.Values;
        }

        public void Update(Contact contact)
        {
            contactList[contact.ContactId] = contact;
        }

        public Contact Remove(string contactId)
        {
            Contact contact;
            contactList.TryRemove(contactId, out contact);
            return contact;
        }
    }
}