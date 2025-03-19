import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { FileKitaService } from './filekita.service';
import { FilekitaDTO } from './dto/filekita.dto';

@Controller('filekita')
export class FilekitaController {
    constructor(private filekitaService: FileKitaService) {}

    @Post()
    membuatRecord(@Body() data: FilekitaDTO) {
        return this.filekitaService.membuatRecord(data);
    }

    @Get()
    lihatOutput() {
        return this.filekitaService.showAll();
    }

    @Get('service')
    lihatSemua() {
        return this.filekitaService.lihatSemua();
    }

    @Get(':id')
    lihatDetail(@Param('id') id: number) {
        return this.filekitaService.lihatPerRecord(id);
    }

    @Put(':id')  
    updateDetail(@Param('id') id: number, @Body() data: Partial<FilekitaDTO>) {  
        return this.filekitaService.update(id, data);  
    }  

    @Delete(':id')  
    deleteDetail(@Param('id') id: number) {  
        return this.filekitaService.hapusData(id);  
    }  
}