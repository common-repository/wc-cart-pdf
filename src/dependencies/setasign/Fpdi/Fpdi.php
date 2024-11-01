<?php

/**
 * This file is part of FPDI
 *
 * @package   setasign\Fpdi
 * @copyright Copyright (c) 2024 Setasign GmbH & Co. KG (https://www.setasign.com)
 * @license   http://opensource.org/licenses/mit-license The MIT License
 */

namespace WCCartPDF\setasign\Fpdi;

use WCCartPDF\setasign\Fpdi\PdfParser\CrossReference\CrossReferenceException;
use WCCartPDF\setasign\Fpdi\PdfParser\PdfParserException;
use WCCartPDF\setasign\Fpdi\PdfParser\Type\PdfIndirectObject;
use WCCartPDF\setasign\Fpdi\PdfParser\Type\PdfNull;

/**
 * Class Fpdi
 *
 * This class let you import pages of existing PDF documents into a reusable structure for FPDF.
 */
class Fpdi extends FpdfTpl
{
    use FpdiTrait;
    use FpdfTrait;

    /**
     * FPDI version
     *
     * @string
     */
    const VERSION = '2.6.1';
}
