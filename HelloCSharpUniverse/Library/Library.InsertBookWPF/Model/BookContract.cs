﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.InsertBookWPF.Model
{
    public class BookContract
    {
        public string ISBN { get; set; }

        public string Title { get; set; }

        public string Author { get; set; }

        public string Summary { get; set; }

        public int Pages { get; set; }

        public int BookGenreId { get; set; }
    }
}