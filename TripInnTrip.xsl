<?xml version="1.0"?> 
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">

<table id="menuTravel" border="1">
 <thead>
    <title>Trip Inn Trip!</title>
    <thead>
    <tr bgcolor="#4F4F4F">
    <th>Tour<th>
    <th>Place<th>
    <th>Price<th>
    </tr>
    </thead>

    <tbody>
        <xsl:for-each select="//section">
            <tr>
                <td colspan="3">
                    <xsl:value-of select="@name" />
                </td>
            </tr>

<xsl:for-each select="tour">
                <tr id="{position()}">
                    <td align="center">
                        <input name="item0" type="checkbox" />
                    </td>
                    <td>
                        <xsl:value-of select="place" />
                    </td>
                    <td align="right">
                        <xsl:value-of select="price" />
                    </td>
                </tr>
            </xsl:for-each>
        </xsl:for-each>
    </tbody>
 </thead>
</table>
</xsl:template>
</xsl:stylesheet>
